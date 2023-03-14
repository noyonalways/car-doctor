import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import ShortNavbar from "../shared/ShortNavbar";

const Authentication = () => {
	return (
		<div>
			<ShortNavbar />
			<Outlet />
		</div>
	);
};

export default Authentication;
