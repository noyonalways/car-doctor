import React from "react";
import SectionTitle from "../../components/SectionTitle";
import ReviewCard from "../../components/ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import img1 from "../../assets/images/testimonial/person1.png";
import img2 from "../../assets/images/testimonial/person2.png";

const persons = [
	{ id: 1, img: img1, name: "Awlad Hossain", profession: "Businessman", rating: 5, },
	{ id: 2, img: img2, name: "Rafiq Khan", profession: "Teacher", rating: 4, },
	{ id: 3, img: img1, name: "Mr. Bilop", profession: "Doctor", rating: 5, },
];
const Testimonial = () => {
	return (
		<section className="py-16">
			<div className="container">
				<SectionTitle
					shortname={`Testimonial`}
					sectionName={`What Customer Says`}
					sectionDetails={`The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `}
				/>

				<Swiper
					modules={[Autoplay, Navigation]}
					autoplay={{ delay: 2000 }}
					grabCursor={true}
					navigation={true}
					spaceBetween={25}

					breakpoints={{
						// when window width is <= 640px
						640: {
							slidesPerView: 1,
						},
						// when window width is <= 768px
						768: {
							slidesPerView: 2,
						},
						// when window width is <= 1024px
						1024: {
							// loop: true,
							slidesPerView: 2,
						},
					}}
					className="py-10"
				>
					{persons.map((person, index) => (
						<SwiperSlide key={person.id}>	
							<ReviewCard person={person} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default Testimonial;
