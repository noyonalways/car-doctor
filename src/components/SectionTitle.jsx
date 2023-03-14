import React from "react";

const SectionTitle = ({ shortname, sectionName, sectionDetails }) => {
	return (
		<div className="text-center space-y-3 mb-8">
			<h3 className="text-primary font-bold">{shortname}</h3>
			<h1 className="text-3xl md:text-4xl font-bold">{sectionName}</h1>
            <p className="max-w-lg mx-auto">{sectionDetails}</p>
		</div>
	);
};

export default SectionTitle;
