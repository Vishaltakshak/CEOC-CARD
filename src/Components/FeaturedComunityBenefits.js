import React from "react";
import HomePageHeading from "./HomePageHeading";
import FeaturedComunityBenefitsList from "./FeaturedComunityBenefitsList";
import '../css/memberbenefits.css';


const FeaturedComunityBenefits = () => {
	return (
		<>
			<div className="container-fluid benefits-block-parent benefits-block-parent-white">
				<div className="container pe-0 ps-0">
					<HomePageHeading pagetopic="FEATURED COMMUNITY BENEFITS" pagetopiclink="View all new benefits"></HomePageHeading>
					<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 member-benefit-block-parent scroll-container">
						<div className="row scroll-inner-div-6-benefits row-equal-height">
							<FeaturedComunityBenefitsList></FeaturedComunityBenefitsList>
							<FeaturedComunityBenefitsList></FeaturedComunityBenefitsList>
							<FeaturedComunityBenefitsList></FeaturedComunityBenefitsList>
							<FeaturedComunityBenefitsList></FeaturedComunityBenefitsList>
							<FeaturedComunityBenefitsList></FeaturedComunityBenefitsList>
							<FeaturedComunityBenefitsList></FeaturedComunityBenefitsList>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FeaturedComunityBenefits;
