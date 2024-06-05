import "./VideoDetails.scss";
import moment from "moment";

function formatDate(milliseconds) {
	let date = new Date(milliseconds);
	let formattedDate = moment(date).format("M/D/YYYY");
	return formattedDate;
}

function VideoDetails({
	title,
	author,
	viewCount,
	likeCount,
	timestamp,
	commentCount,
	description,
}) {
	return (
		<div className="video-details">
			<h1>{title}</h1>
			<div className="video-stats">
				<div className="channel-timestamp">
					<h3 className="channel">By {author}</h3>
					<p className="timestamp">{formatDate(timestamp)}</p>
				</div>

				<div className="likes-views">
					<div className="views-wrapper">
						<div className="image-wrapper">
							<img src="src/assets/images/icons/views.svg" alt="view icon" />
						</div>
						<div className="views">{viewCount}</div>
					</div>

					<div className="likes-wrapper">
						<div className="image-wrapper">
							<img src="src/assets/images/icons/likes.svg" alt="like icon" />
						</div>
						<div className="like-count">{likeCount}</div>
					</div>
				</div>
			</div>
			<p className="video-description">{description}</p>
			<p className="comment-count">{commentCount} Comments</p>
		</div>
	);
}

export default VideoDetails;
