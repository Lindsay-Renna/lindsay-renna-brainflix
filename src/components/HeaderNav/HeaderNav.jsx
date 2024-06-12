import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./HeaderNav.scss";
import { Link } from "react-router-dom";

function HeaderNav() {
	return (
		<header>
			<nav>
				<div className="header__image__wrapper">
					<Link to="/">
						<img
							src="/src/assets/images/logo/BrainFlix-logo.svg"
							alt="Brainflix Logo"
						/>
					</Link>
				</div>
				<div className="search-bar__wrapper">
					<SearchBar />
					<img
						className="user-image"
						src="/src/assets/images/Mohan-muruge.jpg"
						alt="user profile image"
					/>
					<Link to="/upload-page" className="upload-button__link">
						<div className="upload-button">
							<img
								src="/src/assets/images/icons/upload.svg"
								alt="upload arrow"
							/>
							<p>UPLOAD</p>
						</div>
					</Link>
				</div>
			</nav>
		</header>
	);
}
export default HeaderNav;
