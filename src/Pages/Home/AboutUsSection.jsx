import React from "react";
import parts from "../../assets/images/about_us/parts.jpg";
import person from "../../assets/images/about_us/person.jpg";
const AboutUsSection = () => {
	return (
		<section id="about" className="py-24">
			<div className="container">
				
				<div className="flex flex-col lg:flex-row md:items-center space-y-16 md:space-x-44">
					<div className="relative group">
						<img
							className="w-[350px] h-[350px] md:w-[460px] md:h-[473px] object-cover rounded-xl group-hover:scale-[1.03] duration-300"
							src={person}
							alt=""
						/>
						<img
							className="w-[250px] h-[250px] absolute md:w-[327px] md:h-[327px] -right-0 md:-right-20 -bottom-10 object-cover rounded-xl border-base-100 border-8 "
							src={parts}
							alt=""
						/>
					</div>
					<div className="space-y-6">
                    <h3 className="text-xl text-primary font-bold ">About Us</h3>
						<h1 className="text-3xl md:text-5xl font-bold max-w-sm">
							We are qualified & of experience in this field
						</h1>
						<p className="max-w-md">
							There are many variations of passages of Lorem Ipsum available,
							but the majority have suffered alteration in some form, by
							injected humour, or randomised words which don't look even
							slightly believable.{" "}
						</p>
						<p className="max-w-md">
							the majority have suffered alteration in some form, by injected
							humour, or randomised words which don't look even slightly
							believable.{" "}
						</p>
                        <button className="btn btn-primary">Get More Info</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUsSection;
