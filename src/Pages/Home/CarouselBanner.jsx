import React from "react";
import Slide from "../../components/Slide";
import { carouselSlides } from "../../utils/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
const CarouselBanner = () => {
	return (
		<div id="home" className="container my-16">
			<Swiper
				modules={[Autoplay]}
				autoplay={{ delay: 2000 }}
				grabCursor={true}
				className="carousel w-full h-auto md:h-[600px] md:overflow-hidden rounded-xl overflow-hidden"
			>
				{carouselSlides.map((slide) => (
					<SwiperSlide key={slide.id}>
						<Slide slide={slide} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default CarouselBanner;
