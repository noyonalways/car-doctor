import React from "react";
import SectionTitle from "../../components/SectionTitle";
import TeamCard from "../../components/TeamCard";
import { teamMembers } from "../../utils/constant";

const TeamSection = () => {
	return (
		<section className="py-16">
			<div className="container">
				<SectionTitle
					shortname={`Team`}
					sectionName={`Meet Our Team`}
					sectionDetails={`The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `}
				/>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{teamMembers.map((member, index) => (
						<TeamCard member={member} key={index + 1} />
					))}
				</div>
			</div>
		</section>
	);
};

export default TeamSection;
