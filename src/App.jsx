import React from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
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
