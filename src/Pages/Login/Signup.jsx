import React from "react";
import SocialLogin from "../../components/SocialLogin";
import image from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
const Signup = () => {
	return (
		<div className="py-16">
			<div className="container">
				<div className="flex flex-col md:flex-row items-center md:space-x-20">
					<img className="hidden md:inline-block" src={image} alt="" />
					<div className="md:shadow-xl w-full p-5 md:px-10 md:py-16 rounded-md">
						<h2 className="text-2xl font-bold text-center">Sign Up</h2>
						<form className="space-y-6" action="">
							<div className="space-y-2">
								<label htmlFor="notFoundImage">Name</label>
								<input
									className="w-full py-2 px-3 border dark:border-0  bg-neutral rounded"
									type="text"
									placeholder="Your Name"
								/>
							</div>
							<div className="space-y-2">
								<label htmlFor="email">Email</label>
								<input
									className="w-full py-2 px-3 border dark:border-0  bg-neutral rounded"
									type="email"
									placeholder="Your Email"
								/>
							</div>
							<div className="space-y-2">
								<label htmlFor="password">Password</label>
								<input
									className="w-full py-2 px-3 border dark:border-0  bg-neutral rounded"
									type="password"
									placeholder="Your Password"
								/>
							</div>
							<div className="space-y-2">
								<label htmlFor="confirmPassword">Confirm Password</label>
								<input
									className="w-full py-2 px-3 border dark:border-0  bg-neutral rounded"
									type="password"
									placeholder="Confirm Password"
								/>
							</div>
							<input
								className="w-full bg-primary hover:bg-[#e93713] py-2 text-white rounded"
								type="submit"
								value="Sign Up"
							/>
						</form>
						<SocialLogin />
						<div className="text-center">
							Have an account?{" "}
							<Link className="text-primary font-bold" to="/login">
								Login
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
