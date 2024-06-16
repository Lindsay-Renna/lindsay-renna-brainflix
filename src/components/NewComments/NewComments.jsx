import "./NewComments.scss";
import axios from "axios";
import { postCommentEndpoint } from "../../utilities/api_util.js";

function NewComments({ videoId, commentList, setCommentList }) {
	async function postComment(comment) {
		try {
			const res = await axios.post(postCommentEndpoint(videoId), comment);
			const commentData = res.data;
			return commentData;
		} catch (error) {
			console.error(error);
		}
	}

	async function handleSubmit(event) {
		event.preventDefault();
		const newComment = {
			name: "Mohan Muruge",
			comment: event.target.comment.value,
		};

		const newCommentObj = await postComment(newComment);
		const newCommentList = [...commentList, newCommentObj];
		setCommentList(newCommentList);
		event.target.reset();
	}

	return (
		<div className="new-comments">
			<div className="user-image__container">
				<img
					src="/src/assets/images/Mohan-muruge.jpg"
					alt="Mohan Muruge"
					className="user-image"
				/>
			</div>
			<div className="form__wrapper" onSubmit={handleSubmit}>
				<h2>JOIN THE CONVERSATION</h2>
				<form className="new-comment-form">
					<textarea
						type="text"
						name="comment"
						id="comment"
						placeholder=" Add a new comment"
					></textarea>

					<button type="submit">
						<img
							src="/src/assets/images/icons/add_comment.svg"
							alt="comment plus sign"
						/>
						<p>COMMENT</p>
					</button>
				</form>
			</div>
		</div>
	);
}

export default NewComments;
