import "./HomePage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getVideoListEndpoint } from "../../utilities/api_util";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import VideoList from "../../components/VideoList/VideoList";
import SelectedVideo from "../../components/SelectedVideo/SelectedVideo";

function HomePage() {
	const [videos, setVideos] = useState([]);
	const { videoId } = useParams();

	async function getVideos() {
		try {
			let result = await axios.get(getVideoListEndpoint());
			setVideos(result.data);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getVideos();
	}, []);

	if (videos.length < 1) {
		return <p>loading...</p>;
	}

	const selectedVideoId = videoId || videos[0].id;

	const filteredVideos = videos.filter((video) => {
		return selectedVideoId !== video.id;
	});

	return (
		<>
			<HeaderNav />
			<SelectedVideo selectedVideoId={selectedVideoId} />
			<VideoList details={filteredVideos} />
		</>
	);
}

export default HomePage;
