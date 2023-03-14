import React from "react";
import SectionTitle from "../../components/SectionTitle";

const Testimonial = () => {
	return (
		<section className="py-16">
			<div className="container">
				<SectionTitle
					shortname={`Testimonial`}
					sectionName={`What Customer Says`}
					sectionDetails={`The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `}
				/>
                
			</div>
		</section>
	);
};

export default Testimonial;
