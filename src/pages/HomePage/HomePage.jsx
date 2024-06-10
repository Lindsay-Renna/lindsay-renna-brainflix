import "./HomePage.scss";
import CommentSection from "../../components/CommentSection/CommentSection";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideoList from "../../components/VideoList/VideoList";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

function HomePage() {
	return (
		<>
			<HeaderNav />

			<VideoPlayer video={selectedVideo.video} preview={selectedVideo.image} />
			<main>
				<section>
					<VideoDetails
						title={selectedVideo.title}
						author={selectedVideo.channel}
						viewCount={selectedVideo.views}
						likeCount={selectedVideo.likes}
						timestamp={selectedVideo.timestamp}
						commentCount={selectedVideo.comments.length}
						description={selectedVideo.description}
					/>

					<CommentSection comments={selectedVideo.comments} />
				</section>

				<VideoList
					details={filteredVideos}
					changeSelectedVideo={changeSelectedVideo}
				/>
			</main>
		</>
	);
}

export default HomePage;
