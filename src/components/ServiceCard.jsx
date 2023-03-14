import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Card = ({ service }) => {
	const { img, name, price } = service;
	return (
		<div className="p-4 bg-neutral  space-y-5 rounded-xl shadow-xl overflow-hidden group ">
			<figure className="overflow-hidden rounded-xl">
				<img
					src={img}
					alt={`${name} image`}
					className=" h-[220px] w-full object-cover mx-auto group-hover:scale-105 duration-300 "
				/>
			</figure>
			<div className="flex items-end justify-between">
				<div className="space-y-2">
					<h2 className="font-bold text-xl">{name}</h2>
					<p className="font-semibold text-primary">Price: ${price}</p>
				</div>
				<FiArrowRight className="text-primary text-xl" />
			</div>
		</div>
	);
};

export default Card;
