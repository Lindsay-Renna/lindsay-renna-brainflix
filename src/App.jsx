import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import "./App.scss";
import videos from "./data/video-details.json";
import { useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

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
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/videos/:videoId" element={<HomePage />} />
					<Route path="/upload-page" element={<UploadPage />} />
					<Route path="/*" element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
