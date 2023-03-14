import React from "react";
import { Link, useNavigate } from "react-router-dom";
import notFoundImage from "../../assets/icons/404.svg";

const NotFound = () => {
	const navigate = useNavigate();
	return (
		<section className="py-44 flex items-center justify-center h-screen">
			<div className="container flex justify-center items-center">
				<div>
					<img className="max-w-xs md:max-w-md" src={notFoundImage} alt="" />
					<div className="flex justify-center mt-10 items-center space-x-5">
						<button className="btn btn-outline btn-primary" onClick={() => navigate(-1)}>Go back</button>
						<Link to="/" className="btn btn-outline btn-primary">
							Back to Home
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NotFound;
