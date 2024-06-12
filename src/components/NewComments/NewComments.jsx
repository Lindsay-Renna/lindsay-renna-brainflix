import "./NewComments.scss";

function NewComments() {
	return (
		<div className="new-comments">
			<div className="user-image__container">
				<img
					src="/src/assets/images/Mohan-muruge.jpg"
					alt="Mohan Muruge"
					className="user-image"
				/>
			</div>
			<div className="form__wrapper">
				<h2>JOIN THE CONVERSATION</h2>
				<form className="new-comment-form">
					<textarea
						type="text"
						name="comment"
						id="comment"
						placeholder=" Add a new comment"
					></textarea>

					<button>
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
