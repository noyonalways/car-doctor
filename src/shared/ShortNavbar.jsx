import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
const ShortNavbar = () => {
	const { pathname } = useLocation();

	const menuItems = (
		<>
			<li>
				<a href="/#home">Home</a>
			</li>
			<li>
				<a href="/order">Order</a>
			</li>
			<li>
				<a href="/order">Order Review</a>
			</li>
			<li>
				<Link to={pathname.includes("login") ? "signup" : "login"}>
					{pathname.includes("login") ? "Signup" : "Login"}
				</Link>
			</li>
		</>
	);
	return (
		<nav className="bg-base-100 sticky top-0 z-10">
			<div className="container">
				<div className="navbar px-0">
					<div className="navbar-start">
						<div className="dropdown ">
							<label tabIndex={0} className="btn btn-ghost lg:hidden text-3xl">
								<HiMenuAlt2 />
							</label>
							<ul
								tabIndex={0}
								className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
							>
								{menuItems}
							</ul>
						</div>
						<Link className="w-20 sm:w-auto ml-2 md:ml-0" to="/">
							<img src={logo} alt="" />
						</Link>
					</div>

					<div className="navbar-end hidden lg:flex">
						<ul className="menu menu-horizontal px-1">{menuItems}</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default ShortNavbar;
