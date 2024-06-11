import React from "react";
import axios from "axios";
import "./SelectedVideo.scss";
import { getVideoEndpoint } from "../../utilities/api_util";
import { useState, useEffect } from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import VideoDetails from "../VideoDetails/VideoDetails";
import CommentSection from "../CommentSection/CommentSection";

function VideoDetailsPage({ selectedVideoId }) {
	const [video, setVideo] = useState(null);

	async function getSelectedVideo(videoId) {
		try {
			let result = await axios.get(getVideoEndpoint(videoId));
			setVideo(result.data);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getSelectedVideo(selectedVideoId);
	}, [selectedVideoId]);

	if (video === null) {
		return <p>loading...</p>;
	}

	return (
		<>
			<VideoPlayer preview={video.image} />
			<main>
				<section>
					<VideoDetails
						title={video.title}
						author={video.channel}
						viewCount={video.views}
						likeCount={video.likes}
						timestamp={video.timestamp}
						commentCount={video.comments.length}
						description={video.description}
					/>
					<CommentSection comments={video.comments} />
				</section>
			</main>
		</>
	);
}

export default VideoDetailsPage;
