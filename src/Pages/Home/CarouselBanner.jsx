import React from "react";
import Slide from "../../components/Slide";
import { carouselSlides } from "../../utils/constant";

const CarouselBanner = () => {
	return (
		<div id="home" className="container my-16">
			<div className="carousel w-full h-auto  md:h-[600px] rounded-xl md:overflow-hidden">
				{carouselSlides.map((slide) => (
					<Slide slide={slide}  key={slide.id}/>
				))}
			</div>
		</div>
	);
};

export default CarouselBanner;
