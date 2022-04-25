import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuilderFromNPM from "./builder-from-npm";
import BuilderFromScratch from "./builder-from-scratch";
import MainPage from "./main";

function App(props) {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<MainPage />} />
				<Route path="/from-scratch" element={<BuilderFromScratch />} />
				<Route path="/from-builder" element={<BuilderFromNPM />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
