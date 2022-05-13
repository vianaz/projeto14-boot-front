import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../Home";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' component={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}
