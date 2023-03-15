import React from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/route";

function App() {
	return (
		<div className="App font-inter">
			<Toaster />
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
