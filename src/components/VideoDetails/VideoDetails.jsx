import "./VideoDetails.scss";
import moment from "moment";

const data = {
	id: "84e96018-4022-434e-80bf-000ce4cd12b8",
	title: "The Future of Artificial Intelligence",
	channel: "Aiden Thompson",
	image:
		"https://unit-3-project-api-0a5620414506.herokuapp.com/images/image0.jpg",
	description:
		"Explore the cutting-edge developments and predictions for Artificial Intelligence in the coming years. From revolutionary breakthroughs in machine learning to the ethical considerations influencing AI advancements, this exploration transcends the boundaries of mere speculation. Join us on a journey that navigates the intricate interplay between innovation, ethics, and the ever-evolving tech frontier.",
	views: "980,544",
	likes: "22,479",
	duration: "4:01",
	video: "https://unit-3-project-api-0a5620414506.herokuapp.com/stream",
	timestamp: 1691471862000,
	comments: [1, 2, 3, 4],
};

function formatDate(milliseconds) {
	let date = new Date(milliseconds);
	let formattedDate = moment(date).format("M/D/YYYY");
	return formattedDate;
}

function VideoDetails({ details }) {
	return (
		<div className="video-details">
			<h1>{data.title}</h1>
			{/* video title to render dynamially */}
			<div className="video-stats">
				<div className="channel-timestamp">
					<h3 className="channel">By {data.channel}</h3>
					<p className="timestamp">{formatDate(data.timestamp)}</p>
				</div>

				<div className="likes-views">
					<div className="views-wrapper">
						<div className="image-wrapper">
							<img src="src/assets/images/icons/views.svg" alt="view icon" />
						</div>
						<div className="views">{data.views}</div>
					</div>

					<div className="likes-wrapper">
						<div className="image-wrapper">
							<img src="src/assets/images/icons/likes.svg" alt="like icon" />
						</div>
						<div className="like-count">{data.likes}</div>
					</div>
				</div>
			</div>
			<p className="video-description">{data.description}</p>
			<p className="comment-count">{data.comments.length} Comments</p>
		</div>
	);
}

export default VideoDetails;
