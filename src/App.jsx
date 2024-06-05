import "./App.scss";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

function App() {
	return (
		<>
			<HeaderNav />
			<VideoPlayer />
			<VideoDetails />
		</>
	);
}

export default App;
