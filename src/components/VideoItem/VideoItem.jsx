import { Link } from "react-router-dom";
import "./VideoItem.scss";

function VideoItem({ id, title, author, imageUrl }) {
	return (
		<li>
			<Link className="video-list__item" to={`/videos/${id}`}>
				<img src={imageUrl} alt={`${title} video image`} />
				<div className="item-details">
					<h5>{title}</h5>
					<p>{author}</p>
				</div>
			</Link>
		</li>
	);
}

export default VideoItem;
