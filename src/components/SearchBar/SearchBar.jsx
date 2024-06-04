import "./SearchBar.scss";

function SearchBar() {
	return (
		<form className="form">
			<div className="search-field">
				<img src="src/assets/images/icons/search.svg" alt="search icon" />
				<input id="search" type="text" className="input" placeholder="Search" />
			</div>
		</form>
	);
}

export default SearchBar;
