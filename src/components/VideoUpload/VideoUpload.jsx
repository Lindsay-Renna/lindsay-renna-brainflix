import "./VideoUpload.scss";

function VideoUpload() {
	return (
		<div className="upload">
			<h1>Upload Video</h1>
			<div className="upload__container">
				<div className="upload__thumbnail">
					<h3 className="upload__label">VIDEO THUMBNAIL</h3>
					<img
						src="src/assets/images/Upload-video-preview.jpg"
						alt="video preview"
					/>
				</div>
				<div className="upload__details">
					<form className="upload__form">
						<label htmlFor="">TITLE YOUR VIDEO</label>
						<textarea
							type="text"
							name="title"
							id="title"
							placeholder="Add a title to your video"
							className="upload__form__title"
						></textarea>

						<label htmlFor="description">ADD A VIDEO DESCRIPTION</label>
						<textarea
							type="text"
							name="description"
							id="description"
							placeholder="Add a description to your video"
							className="upload__form__description"
						></textarea>
					</form>
					<div className="upload__buttons">
						<p className="cancel">CANCEL</p>
						<button>
							<img
								src="src/assets/images/icons/publish.svg"
								alt="upload arrow"
							/>
							<p>PUBLISH</p>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default VideoUpload;
