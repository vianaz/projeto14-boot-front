import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContext from "../Contexts/AppContext";

import Home from "../Home";
import BookPage from "../BookPage";
export default function App() {
	const [showModal, setShowModal] = useState(false);
	const APILink = process.env.REACT_APP_API_LINK;
	return (
		<UserContext.Provider value={{ APILink, showModal, setShowModal }}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path="/book/:idBook" element={<BookPage />} />
				</Routes>
			</BrowserRouter>
		</UserContext.Provider>
	);
}
