import React from "react";
import calender from "../../assets/icons/calender.svg";
import phone from "../../assets/icons/phone.svg";
import location from "../../assets/icons/location.svg";

const ContactSection = () => {
	return (
		<section id="contact" className="py-16">
			<div className="container ">
				<div className="grid lg:grid-cols-3 bg-secondary px-10 py-12 md:px-16 md:py-20 rounded-xl gap-6">
					<div className="group flex md:flex-row space-x-5 text-white dark:text-slate-300">
						<img className="w-10" src={calender} alt="" />
						<div>
							<p className="text-sm md:text-base">We are open monday-friday</p>
							<h2 className="text-lg md:text-xl lg:text-2xl font-bold group-hover:text-primary duration-300">7:00 am - 9:00 pm</h2>
						</div>
					</div>
					<div className="group flex md:flex-row space-x-5 text-white dark:text-slate-300">
						<img className="w-10" src={phone} alt="" />
						<div>
							<p className="text-sm md:text-base">Have a question?</p>
							<h2 className="text-lg md:text-xl lg:text-2xl font-bold group-hover:text-primary duration-300">+2546 251 2658</h2>
						</div>
					</div>
					<div className="group flex md:flex-row space-x-5 text-white dark:text-slate-300">
						<img className="w-10" src={location} alt="" />
						<div>
							<p className="text-sm md:text-base">Need a repair? our addresss</p>
							<h2 className="text-lg md:text-xl lg:text-2xl font-bold group-hover:text-primary duration-300">Liza Street, New York</h2>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
