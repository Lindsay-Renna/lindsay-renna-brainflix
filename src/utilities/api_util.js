const API_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
const API_KEY = "?api_key=a977011a-4c17-4e43-854f-6cba5ca74060";

export function getVideoListEndpoint() {
	return API_URL + "videos" + API_KEY;
}

export function getVideoEndpoint(id) {
	return API_URL + "videos/" + id + API_KEY;
}
