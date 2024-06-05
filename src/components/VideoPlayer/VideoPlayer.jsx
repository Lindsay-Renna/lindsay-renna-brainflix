import "./VideoPlayer.scss";

function VideoPlayer() {
	return (
		<div>
			<video
				controls
				width="320"
				poster="src/assets/images/Upload-video-preview.jpg"
			>
				Your browser does not support the video tag.
			</video>
		</div>
	);
}

export default VideoPlayer;
