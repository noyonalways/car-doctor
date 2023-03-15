import React from "react";
import logo from "../assets/logo.svg";
import { HiOutlineShoppingBag, HiSearch } from "react-icons/hi";
import { HiMenuAlt2 } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	const menuItems = (
		<>
			<li>
				<a href="/#home">Home</a>
			</li>
			<li>
				<a href="/#about">About</a>
			</li>
			<li>
				<a href="/#services">Services</a>
			</li>
			<li>
				<a href="/#blog">Blog</a>
			</li>
			<li>
				<a href="/#contact">Contact</a>
			</li>
			<li>
				<NavLink to="login">Login</NavLink>
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
						<NavLink className="w-20 sm:w-auto ml-2 md:ml-0" to='/'>
							<img src={logo} alt="" />
						</NavLink>
					</div>
					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal px-1">{menuItems}</ul>
					</div>
					<div className="navbar-end">
						<div className="flex space-x-4 items-center">
							<HiOutlineShoppingBag className="text-2xl hover:text-primary duration-300 hidden md:inline-block" />
							<HiSearch className="text-2xl hover:text-primary duration-300 hidden md:inline-block" />
							<a className="btn btn-outline btn-primary">Appointment</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
