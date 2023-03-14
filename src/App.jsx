import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/route";

function App() {
	return (
		<div className="App font-inter">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
