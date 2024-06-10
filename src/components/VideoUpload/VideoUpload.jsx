import React from "react";

function VideoUpload() {
	return (
		<div>
			<h1>Upload Video</h1>
			<div className="upload-video">
				<div className="upload-video__thumbnail">
					<h3>VIDEO THUMBNAIL</h3>
					<img
						src="src/assets/images/Upload-video-preview.jpg"
						alt="video preview"
					/>
				</div>
				<div className="upload-video__details">
					<form className="upload-form">
						<label htmlFor=""></label>
						<input type="text" name="title" id="title" />

						<label htmlFor="description"></label>
						<input type="text" name="description" id="description" />
					</form>
					<div className="form-buttons">
						<p>CANCEL</p>
						<button>
							<img
								src="src/assets/images/icons/upload.svg"
								alt="upload arrow"
							/>
							PUBLISH
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default VideoUpload;
