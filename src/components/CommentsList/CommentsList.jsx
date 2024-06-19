import "./CommentsList.scss";
import moment from "moment";
import { deleteCommentEndpoint } from "../../utilities/api_util.js";
import axios from "axios";

function CommentsList({ comments, videoId, setCommentList }) {
	function formatDate(milliseconds) {
		let date = new Date(milliseconds);
		let formattedDate = moment(date).format("M/D/YYYY");
		return formattedDate;
	}

	async function deleteComment(id1, id2) {
		try {
			const res = await axios.delete(deleteCommentEndpoint(id1, id2));
		} catch (error) {
			console.error(error);
		}
	}

	async function handleDelete(event) {
		const commentId = event.currentTarget.id;

		await deleteComment(videoId, commentId);
		setCommentList((prevComments) =>
			prevComments.filter((comment) => comment.id !== commentId)
		);
	}

	const sortedComments = comments.sort((a, b) => b.timestamp - a.timestamp);

	if (comments.length === 0) {
		return (
			<div className="comments-list">
				<h3 className="empty-header">There are no comments for this video</h3>{" "}
			</div>
		);
	} else {
		return (
			<div className="comments-list">
				{sortedComments.map((comment) => {
					return (
						<div className="comment" key={comment.id}>
							<div>
								<div className="comment__image"></div>
							</div>
							<div className="comment__info">
								<h4 className="comment__name">{comment.name}</h4>
								<p className="comment__date">{formatDate(comment.timestamp)}</p>
								<p className="comment__comment">{comment.comment}</p>
								<div
									onClick={handleDelete}
									id={comment.id}
									className="delete-button__wrapper"
								>
									<img
										className="delete-button"
										src="/src/assets/images/icons/icon-delete.svg"
										alt="delete button"
									/>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export default CommentsList;
