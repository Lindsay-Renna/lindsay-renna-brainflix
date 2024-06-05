import "./App.scss";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import details from "./data/video-details.json";
import { useState } from "react";

console.log(details);
// const [selectedVideo, setSelectedVideo] = useState(details[0]);

function App() {
	return (
		<>
			<HeaderNav />
			<VideoPlayer />
			<VideoDetails details={details} />
			{/* <CommentSection /> */}
			{/* <VideoList /> */}
		</>
	);
}

export default App;
