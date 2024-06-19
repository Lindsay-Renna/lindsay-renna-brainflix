import "./VideoUpload.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";

Modal.setAppElement("#root");
const API_URL = import.meta.env.VITE_API_URL;

function VideoUpload() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const navigate = useNavigate();

	async function handleSubmit(event) {
		event.preventDefault();

		const newVideo = {
			title: event.target.title.value,
			channel: "Mohan Murugue",
			image: "http://localhost:8080/images/Upload-video-preview.jpg",
			description: event.target.description.value,
			timestamp: event.timeStamp,
		};

		try {
			const result = await axios.post(API_URL + "/videos", newVideo);
		} catch (error) {
			console.error(error);
		}
		handleUpload();
	}

	function handleUpload() {
		// simulate the upload
		setTimeout(() => {
			setModalIsOpen(true);
			setTimeout(() => {
				setModalIsOpen(false);
				navigate("/");
			}, 2500);
		}, 1000);
	}

	return (
		<div className="upload">
			<h1>Upload Video</h1>
			<div className="upload__container">
				<div className="upload__thumbnail">
					<h3 className="upload__thumbnail__label">VIDEO THUMBNAIL</h3>
					<img
						className="upload__thumbnail__image"
						src="src/assets/images/Upload-video-preview.jpg"
						alt="video preview"
					/>
				</div>
				<div className="upload__details">
					<form onSubmit={handleSubmit} className="upload__form">
						<label htmlFor="title">TITLE YOUR VIDEO</label>
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
						<div className="upload__buttons">
							<p className="cancel">CANCEL</p>
							<button type="submit">
								<img
									src="src/assets/images/icons/publish.svg"
									alt="upload arrow"
								/>
								<p>PUBLISH</p>
							</button>
						</div>
					</form>
				</div>
			</div>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={() => setModalIsOpen(false)}
				contentLabel="Upload Success"
				style={{
					overlay: {
						backgroundColor: "rgba(0, 0, 0, 0.75)",
					},
					content: {
						top: "50%",
						left: "50%",
						right: "auto",
						bottom: "auto",
						marginRight: "-50%",
						transform: "translate(-50%, -50%)",
					},
				}}
			>
				<div>
					<h2>Success</h2>
					<p>Upload successful! Redirecting to home page...</p>
				</div>
			</Modal>
		</div>
	);
}

export default VideoUpload;
