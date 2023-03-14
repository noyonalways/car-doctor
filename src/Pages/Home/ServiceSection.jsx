import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../components/ServiceCard";
import SectionTitle from "../../components/SectionTitle";
import { services } from "../../utils/constant";

const ServiceSection = () => {
	return (
		<section id="services" className="py-24">
			<div className="container">
				<SectionTitle
					shortname={`Service`}
					sectionName={`Our Service Area`}
					sectionDetails={`The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`}
				/>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{services.map((service) => (
						<ServiceCard service={service} key={service.id}/>
					))}
				</div>
				<div className="flex justify-center mt-10">
					<Link to='/services' className="btn btn-outline btn-primary">More Services</Link>
				</div>
			</div>
		</section>
	);
};

export default ServiceSection;
