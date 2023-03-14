import React from "react";
import AboutUsSection from "./AboutUsSection";
import CarouselBanner from "./CarouselBanner";
import ContactSection from "./ContactSection";
import FeaturesSection from "./FeaturesSection";
import ProductSetion from "./ProductSetion";
import ServiceSection from "./ServiceSection";
import TeamSection from "./TeamSection";
import Testimonial from "./Testimonial";

const Home = () => {
	return (
		<>
			<CarouselBanner />
			<AboutUsSection />
			<ServiceSection />
			<ContactSection />
			<ProductSetion />
			<TeamSection />
			<FeaturesSection />
			<Testimonial />
		</>
	);
};

export default Home;
