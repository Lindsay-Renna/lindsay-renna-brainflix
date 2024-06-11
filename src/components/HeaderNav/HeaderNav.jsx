import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./HeaderNav.scss";
import { Link } from "react-router-dom";

function HeaderNav() {
	return (
		<header>
			<nav>
				<div className="image-wrapper">
					<Link to="/">
						<img
							src="/src/assets/images/logo/BrainFlix-logo.svg"
							alt="Brainflix Logo"
						/>
					</Link>
				</div>
				<div className="search-bar-wrapper">
					<SearchBar />
					<img
						className="user-image"
						src="/src/assets/images/Mohan-muruge.jpg"
						alt="user profile image"
					/>
					<div className="upload-button">
						<img src="/src/assets/images/icons/upload.svg" alt="upload arrow" />
						<p>UPLOAD</p>
					</div>
				</div>
			</nav>
		</header>
	);
}
export default HeaderNav;
