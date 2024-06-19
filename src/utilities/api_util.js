const API_URL = "http://localhost:8080/";

export function getVideoListEndpoint() {
	return API_URL + "videos";
}

export function getVideoEndpoint(id) {
	return API_URL + "videos/" + id;
}

export function postCommentEndpoint(id) {
	return API_URL + "videos/" + id + "/comments";
}

export function deleteCommentEndpoint(videoId, commentId) {
	return API_URL + "videos/" + videoId + "/comments/" + commentId;
}
