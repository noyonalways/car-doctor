import React from "react";
import {FiArrowLeft, FiArrowRight} from 'react-icons/fi'

const Slide = ({ slide }) => {
	return (
		<div
			
			id={`slide${slide.id}`}
			className="carousel-item relative w-full text-white dark:text-slate-300"
		>
			<img src={slide.img} className="w-full md:object-cover " />
			<div className="absolute w-full bg-gradient-to-r from-black to-transparent h-full flex flex-col justify-center ">
				<div className="mx-3 md:ml-10">
					<h1 className="text-2xl md:text-5xl font-bold max-w-xs">
						Affordable Price For Car Servicing
					</h1>
					<p className="py-1 text-sm md:text-lg md:py-10 max-w-md">
						There are many variations of passages of available, but the majority
						have suffered alteration in some form
					</p>
					<div className="flex space-x-4 mt-5">
						<button className="btn btn-sm md:btn-md btn-primary">
							Discover More
						</button>
						<button className="btn btn-sm md:btn-md bg-transparent border border-white text-white">
							Letest Project
						</button>
					</div>
				</div>
			</div>
			<div className="absolute flex space-x-5 justify-end transform -translate-y-1/2 left-5 right-3 -bottom-2 md:right-10 md:bottom-5">
				<a
					href={`#slide${slide.id === 1 ? slide.id + 5 : slide.id - 1}`}
					className="btn btn-sm md:btn-md btn-circle btn-primary text-white"
				>
					<FiArrowLeft/>
				</a>
				<a
					href={`#slide${slide.id === 6 ? slide.id - 5 : slide.id + 1}`}
					className="btn btn-sm md:btn-md btn-circle btn-primary text-white"
				>
					<FiArrowRight/>
				</a>
			</div>
		</div>
	);
};

export default Slide;
