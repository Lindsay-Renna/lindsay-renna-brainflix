import CommentsList from "../CommentsList/CommentsList";
import NewComments from "../NewComments/NewComments";
import "./CommentSection.scss";

function CommentSection({ comments }) {
	return (
		<section className="comment-section">
			<NewComments />
			<CommentsList comments={comments} />
		</section>
	);
}

export default CommentSection;
