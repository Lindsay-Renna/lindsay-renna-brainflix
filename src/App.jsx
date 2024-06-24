import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/videos/:videoId" element={<HomePage />} />
					<Route path="/upload-page" element={<UploadPage />} />
					<Route path="/*" element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
