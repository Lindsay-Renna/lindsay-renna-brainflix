import CommentsList from "../CommentsList/CommentsList";
import "./CommentSection.scss";

function CommentSection({ comments }) {
	return (
		<section>
			{/* <NewComments /> */}
			<CommentsList comments={comments} />
		</section>
	);
}

export default CommentSection;
