import React from "react";
import { AiFillStar } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";

const ProductCard = ({ product }) => {
	const { img, name, price, rating } = product;
	return (
		<div className="p-4 bg-neutral space-y-5 rounded-xl shadow-xl overflow-hidden group ">
			<figure className="bg-[#F3F3F3] dark:bg-[#4e5664] rounded-xl overflow-hidden relative">
				<img
					src={img}
					alt={`${name} image`}
					className="mx-auto h-[220px] w-36 object-contain  group-hover:scale-110 duration-300 "
				/>
				<div className=" absolute top-4 right-4 bg-base-100 p-3 rounded-lg hidden opacity-0 group-hover:opacity-100 group-hover:inline-block">
					<HiOutlineShoppingBag className="text-2xl text-primary " />
				</div>
			</figure>
			<div className="items-end justify-between text-center">
				<div className="space-y-2 ">
					<p>
						{[...Array(rating)].map((star, index) => {
							return (
								<AiFillStar key={index} className="inline-block text-orange-300 text-xl" />
							);
						})}
					</p>
					<h2 className="font-bold text-xl">{name}</h2>
					<p className="font-semibold text-primary">Price: ${price}</p>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
