import "./App.scss";
import CommentSection from "./components/CommentSection/CommentSection";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import VideoList from "./components/VideoList/VideoList";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import videos from "./data/video-details.json";
import { useState } from "react";

function App() {
	const [selectedVideo, setSelectedVideo] = useState(videos[0]);

	function changeSelectedVideo(id) {
		const foundVideo = videos.find((video) => {
			return video.id === id;
		});
		setSelectedVideo(foundVideo);
	}

	const filteredVideos = videos.filter((detail) => {
		return detail.id !== selectedVideo.id;
	});

	return (
		<>
			<HeaderNav />
			<main>
				<VideoPlayer video={selectedVideo.video} />
				<VideoDetails
					title={selectedVideo.title}
					author={selectedVideo.channel}
					viewCount={selectedVideo.views}
					likeCount={selectedVideo.likes}
					timestamp={selectedVideo.timestamp}
					commentCount={selectedVideo.comments.length}
					description={selectedVideo.description}
				/>
			</main>
			<CommentSection comments={selectedVideo.comments} />
			<VideoList
				details={filteredVideos}
				changeSelectedVideo={changeSelectedVideo}
			/>
		</>
	);
}

export default App;
