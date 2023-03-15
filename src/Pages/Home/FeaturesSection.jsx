import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { features } from "../../utils/constant";

const FeaturesSection = () => {
	return (
		<section className="py-16">
			<div className="container">
				<SectionTitle
					shortname={`Core Features`}
					sectionName={`Why Choose Us`}
					sectionDetails={`The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `}
				/>
				<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 place-items-center gap-6">
					{features.map((feature) => (
						<div key={feature.id} className="min-w-full md:min-w-[170px]  px-6 py-8 hover:bg-primary hover:text-white flex flex-col items-center rounded-xl shadow-md space-y-3 bg-[#ffffff] dark:bg-[#4e5664] duration-300  feature-card">
							<img src={feature.img} alt={feature + "image"} />
                            <h3>{feature.title}</h3>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FeaturesSection;
