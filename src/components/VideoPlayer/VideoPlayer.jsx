import "./VideoPlayer.scss";

function VideoPlayer({ preview }) {
	return (
		<div className="video-container">
			<video controls poster={preview}>
				Your browser does not support the video tag.
			</video>
		</div>
	);
}

export default VideoPlayer;
