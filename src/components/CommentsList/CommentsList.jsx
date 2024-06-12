import "./CommentsList.scss";
import moment from "moment";

function CommentsList({ comments }) {
	function formatDate(milliseconds) {
		let date = new Date(milliseconds);
		let formattedDate = moment(date).format("M/D/YYYY");
		return formattedDate;
	}

	return (
		<div className="comments-list">
			{comments.map((comment) => {
				return (
					<div className="comment" key={comment.id}>
						<div>
							<div className="comment__image"></div>
						</div>
						<div className="comment__info">
							<h4 className="comment__name">{comment.name}</h4>
							<p className="comment__date">{formatDate(comment.timestamp)}</p>
							<p className="comment__comment">{comment.comment}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default CommentsList;
