import CommentsList from "../CommentsList/CommentsList";
import NewComments from "../NewComments/NewComments";
import "./CommentSection.scss";
import { useState, useEffect } from "react";

function CommentSection({ comments, id }) {
	const [commentList, setCommentList] = useState(comments);

	useEffect(() => {
		setCommentList(comments);
	}, [comments]);

	return (
		<section className="comment-section">
			<NewComments
				videoId={id}
				commentList={commentList}
				setCommentList={setCommentList}
			/>
			<CommentsList
				comments={commentList}
				setCommentList={setCommentList}
				videoId={id}
			/>
		</section>
	);
}

export default CommentSection;
