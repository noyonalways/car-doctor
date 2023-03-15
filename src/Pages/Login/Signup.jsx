import React, { useContext, useState } from "react";
import image from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { AuthContext } from "../../context/AuthProvider";

const Signup = () => {
	// const [showPasseword, setShowPassword] = useState(false);
	const [name, setName] = useState({ value: "", error: "" });
	const [email, setEmail] = useState({ value: "", error: "" });
	const [password, setPassword] = useState({ value: "", error: "" });
	const { createUser, updateUserProfile } = useContext(AuthContext);

	const handleName = (inputName) => {
		if (inputName) {
			setName({ value: inputName, error: "" });
		} else {
			setName({ value: "", error: "Your name" });
		}
	};

	const handleEmail = (inputEmail) => {
		if (/\S+@\S+\.\S+/.test(inputEmail)) {
			setEmail({ value: inputEmail, error: "" });
		} else {
			setEmail({ value: "", error: "Input a valid email" });
		}
	};

	const handlePassword = (inputPassword) => {
		if (inputPassword) {
			setPassword({ value: inputPassword, error: "" });
		} else {
			setPassword({ value: "", error: "Enter Password" });
		}
	};

	const handleSignUp = (event) => {
		event.preventDefault();

		if (name.value === "") {
			setName({ value: "", error: "Name is required" });
		}
		if (email.value === "") {
			setEmail({ value: "", error: "Email is required" });
		}
		if (password.value === "") {
			setPassword({ value: "", error: "Password is required" });
		}

		// console.log(name, email, password);
		if (name.value && email.value && password.value) {
			createUser(email.value, password.value)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					toast.success("Successfully created user! ");
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
				});
		}
	};

	return (
		<div className="py-16">
			<div className="container">
				<div className="flex flex-col md:flex-row items-center md:space-x-20">
					<img className="hidden md:inline-block" src={image} alt="" />
					<div className="md:shadow-xl w-full p-5 md:px-10 md:py-16 rounded-md">
						<h2 className="text-2xl font-bold text-center">Sign Up</h2>
						<form onSubmit={handleSignUp} className="space-y-6" action="">
							<div className="space-y-2">
								<label htmlFor="name">Name</label>
								<input
									className="w-full py-2 px-3 border dark:border-0  bg-neutral rounded"
									type="text"
									placeholder="Your Name"
									name="name"
									onChange={(e) => handleName(e.target.value)}
								/>
								{name?.error && (
									<small className="text-red-400">{name.error}</small>
								)}
							</div>
							<div className="space-y-2">
								<label htmlFor="email">Email</label>
								<input
									className="w-full py-2 px-3 border dark:border-0  bg-neutral rounded"
									type="email"
									placeholder="Your Email"
									name="email"
									onChange={(e) => handleEmail(e.target.value)}
								/>
								{email?.error && (
									<small className="text-red-400">{email.error}</small>
								)}
							</div>
							<div className="space-y-2">
								<label htmlFor="password">Password</label>
								<input
									className="w-full py-2 px-3 border dark:border-0  bg-neutral rounded"
									type="password"
									placeholder="Your Password"
									name="password"
									onChange={(e) => handlePassword(e.target.value)}
								/>
								{password?.error && (
									<small className="text-red-400">{password.error}</small>
								)}
							</div>
							<input
								className="w-full bg-primary hover:bg-[#e93713] py-2 text-white rounded cursor-pointer"
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
