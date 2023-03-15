import React from "react";
import logo from "../assets/logo-dark.svg";
import { BsGoogle, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
	return (
		<footer className="bg-secondary">
			<div className="container">
				<div className="footer py-10 px-2 md:px-0 text-white">
					<div>
						<img className="w-24" src={logo} alt="logo" />
						<p className="max-w-sm mb-2">
							Edwin Diaz is a software and web technologies engineer, a life
							coach trainer who is also a serial .
						</p>
						<div className="flex items-center space-x-5 ">
							<a className="duration-300 bg-[#2c2c2c] flex items-center justify-center btn-circle btn-primary text-white" href="#">
								<BsGoogle />
							</a>
							<a className="duration-300 bg-[#2c2c2c] flex items-center justify-center btn-circle btn-primary text-white" href="#">
								<BsTwitter />
							</a>
							<a className="duration-300 bg-[#2c2c2c] flex items-center justify-center btn-circle btn-primary text-white" href="#">
								<BsInstagram />
							</a>
							<a className="duration-300 bg-[#2c2c2c] flex items-center justify-center btn-circle btn-primary text-white" href="#">
								<BsLinkedin />
							</a>
						</div>
					</div>
					<div>
						<span className="footer-title">About</span>
						<a className="link link-hover">Home</a>
						<a className="link link-hover">Service</a>
						<a className="link link-hover">Contact</a>
					</div>
					<div>
						<span className="footer-title">Company</span>
						<a className="link link-hover">Why Car Doctor</a>
						<a className="link link-hover">About</a>
					</div>
					<div>
						<span className="footer-title">Support</span>
						<a className="link link-hover">Support Center</a>
						<a className="link link-hover">Feedback</a>
						<a className="link link-hover">Accesiblity</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
