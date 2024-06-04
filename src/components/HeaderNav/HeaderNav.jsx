import React from "react";

function HeaderNav() {
	return (
		<div>
			<img
				src="../../assets/imges/logo/BrainFlix-logo.svg"
				alt="Brainflix Logo"
			/>
			<SearchBar />
			<UploadButton />
			<img src="../../assets/imges/Mohan-muruge.jpg" alt="" />
		</div>
	);
}
export default HeaderNav;
