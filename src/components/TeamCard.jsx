import React from "react";

import {
	FaFacebookF,
	FaTwitter,
	FaLinkedinIn,
	FaInstagram,
} from "react-icons/fa";

const TeamCard = ({ member }) => {
	const { img, name, skill, socialLink } = member;
	return (
		<div className="p-4 bg-neutral space-y-5 rounded-xl shadow-xl overflow-hidden group ">
			<figure className="rounded-xl overflow-hidden">
				<img
					src={img}
					alt={`${name} image`}
					className="mx-auto h-[220px]  rounded-xl object-cover  group-hover:scale-110 duration-300 overflow-hidden"
				/>
			</figure>
			<div className="items-end justify-between text-center">
				<div className="space-y-2 ">
					<h2 className="font-bold text-xl">{name}</h2>
					<p>{skill}</p>
					<div className="flex items-center justify-center text-white space-x-2">
						{socialLink.map(
							(link, index) =>
								(link.includes("facebook") && (
									<a target="_blank"
										key={index + 1}
										href={link}
										className="p-3 bg-[#3b5998] rounded-full"
									>
										<FaFacebookF />
									</a>
								)) ||
								(link.includes("twitter") && (
									<a target="_blank"
										key={index + 1}
										href={link}
										className="p-3 bg-[#00acee] rounded-full"
									>
										<FaTwitter />
									</a>
								)) ||
								(link.includes("linkedin") && (
									<a target="_blank"
										key={index + 1}
										href={link}
										className="p-3 bg-[#0072b1] rounded-full"
									>
										<FaLinkedinIn />
									</a>
								)) ||
								(link.includes("instagram") && (
									<a target="_blank"
										key={index + 1}
										href={link}
										className="p-3 bg-gradient-to-r from-[#BD4697] from- to-[#EF545E] rounded-full"
									>
										<FaInstagram />
									</a>
								))
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamCard;
