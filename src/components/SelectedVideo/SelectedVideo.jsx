import axios from "axios";
import "./SelectedVideo.scss";
import { getVideoEndpoint, putLikesEndpoint } from "../../utilities/api_util";
import { useState, useEffect } from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import VideoDetails from "../VideoDetails/VideoDetails";
import CommentSection from "../CommentSection/CommentSection";

function VideoDetailsPage({ selectedVideoId }) {
	const [video, setVideo] = useState(null);
	const [likes, setLikes] = useState(0);

	async function getSelectedVideo(videoId) {
		try {
			let result = await axios.get(getVideoEndpoint(videoId));
			setVideo(result.data);
			setLikes(result.data.likes);
		} catch (error) {
			console.error(error);
		}
	}

	async function addLikes(videoId) {
		try {
			await axios.put(putLikesEndpoint(videoId));
			setLikes((prevLikes) => prevLikes + 1);
		} catch (error) {
			console.error(error);
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
			<main id="selected-video">
				<section id="video-details">
					<VideoDetails
						title={video.title}
						author={video.channel}
						viewCount={video.views}
						likeCount={likes}
						timestamp={video.timestamp}
						commentCount={video.comments.length}
						description={video.description}
						id={video.id}
						addLikes={addLikes}
					/>
					<CommentSection comments={video.comments} id={selectedVideoId} />
				</section>
			</main>
		</>
	);
}

export default VideoDetailsPage;
