import VideoItem from "../VideoItem/VideoItem";
import "./VideoList.scss";

function VideoList({ details, changeSelectedVideo }) {
	return (
		<aside className="video-list">
			<h4 className="video-list__header">NEXT VIDEOS</h4>
			<ul>
				{details.map((detail) => {
					return (
						<VideoItem
							key={detail.id}
							id={detail.id}
							title={detail.title}
							author={detail.channel}
							imageUrl={detail.image}
							changeSelectedVideo={changeSelectedVideo}
						/>
					);
				})}
			</ul>
		</aside>
	);
}

export default VideoList;
