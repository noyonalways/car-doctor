import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import SectionTitle from "../../components/SectionTitle";
import { products } from "../../utils/constant";

const ProductSetion = () => {
	return (
		<section className="py-16">
			<div className="container">
				<SectionTitle
					shortname={`Popular Products`}
					sectionName={`Browse Our Products`}
					sectionDetails={`The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `}
				/>
				<div className="grid md:grid-cols-3 gap-6">
					{products.map((product) => (
						<ProductCard product={product} key={product.id}/>
					))}
				</div>
				<div className="flex justify-center mt-10">
					<Link to="/services" className="btn btn-outline btn-primary">
						More Products
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ProductSetion;
