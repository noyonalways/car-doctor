import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaQuoteRight } from "react-icons/fa";
const ReviewCard = ({person}) => {
	return (
		<div className="p-8 border dark:border-[#555454] rounded-lg shadow-lg relative">
			<div className="flex space-x-5">
				<img src={person.img} alt="" className="w-14" />
				<div>
					<h1 className="text-lg font-bold">{person.name}</h1>
					<p>{person.profession}</p>
				</div>
			</div>
            <FaQuoteRight className="absolute right-44 top-8 opacity-10 text-red-600 text-5xl" alt="quote image" />
			<p className="my-4">
				There are many variations of passages of Lorem Ipsum available, but the
				majority have suffered alteration in some form, by injected humour, or
				randomised words which don't look even slightly believable.
			</p>

			{[...Array(person.rating)].map((star, index) => {
				return (
					<AiFillStar
						key={index}
						className="inline-block text-orange-400 text-xl"
					/>
				);
			})}
		</div>
	);
};

export default ReviewCard;
