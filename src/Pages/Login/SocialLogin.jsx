import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const SocialLogin = () => {
	return (
		<div className="py-6">
			<small className="text-center block">Or Sign In with</small>
			<div className="flex items-center justify-center space-x-5 mt-5">
				<button className="bg-[#F5F5F8] dark:bg-gray-200 p-4 rounded-full text-xl text-[#3b5998]">
					<FaFacebookF />
				</button>
				<button className="bg-[#F5F5F8] dark:bg-gray-200 p-4 rounded-full text-xl text-[#00acee]">
					<FaTwitter />
				</button>
				<button className="bg-[#F5F5F8] dark:bg-gray-200 p-4 rounded-full text-xl">
					<FcGoogle />
				</button>
			</div>
		</div>
	);
};

export default SocialLogin;
