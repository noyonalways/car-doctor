import { createBrowserRouter } from "react-router-dom";
import Authentication from "../Layouts/Authentication";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import NotFound from "../Pages/NotFound/NotFound";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
		],
	},
	{
		path: "/",
		element: <Authentication />,
		children: [
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "signup",
				element: <Signup />,
			},
		],
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);

export default router;
