import "./VideoItem.scss";

function VideoItem({ id, title, author, imageUrl, changeSelectedVideo }) {
	return (
		<li
			className="video-list__item"
			onClick={() => {
				changeSelectedVideo(id);
			}}
		>
			<img src={imageUrl} alt={`${title} video image`} />
			<div className="item-details">
				<h5>{title}</h5>
				<p>{author}</p>
			</div>
		</li>
	);
}

export default VideoItem;
