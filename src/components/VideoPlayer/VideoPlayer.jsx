import "./VideoPlayer.scss";

function VideoPlayer({ video }) {
	return (
		<div className="video-container">
			<video controls poster="src/assets/images/Upload-video-preview.jpg">
				Your browser does not support the video tag.
			</video>
		</div>
	);
}

export default VideoPlayer;
