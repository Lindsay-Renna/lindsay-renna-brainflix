import HeaderNav from "../../components/HeaderNav/HeaderNav";
import "./NotFoundPage.scss";

function NotFoundPage() {
	return (
		<div>
			<HeaderNav />
			<div className="error-wrapper">
				<img src="src/assets/images/404-error.jpg" alt="404 error" />
				<h1>That video could not be found</h1>
			</div>
		</div>
	);
}

export default NotFoundPage;
