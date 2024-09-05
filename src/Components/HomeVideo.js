import React from "react";
import { Link } from "react-router-dom";
//import BgVideo from '././assets/img/vid-bg.mp4';
import '../css/home.css';

const BgVideo = '././assets/img/vid-bg.mp4';
const DivLogo1 = '././assets/img/homelogo1.png';
const DivLogo2 = '././assets/img/homelogo2.png';
const DivLogo3 = '././assets/img/homelogo3.png';
const HomeVideo = () => {
	return (
		<>
			<div className="video-overlay1">
				<video autoPlay loop muted className="bg-vid1"> 
					<source src={BgVideo} type="video/mp4" /> 
				</video>
			</div>
			
			<div className="video-details1 text-center">
				<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
					<h1 className="homevideo-title1">Exceptional Perks for CEOs, CFOs, Business Owners, and Entrepreneurs</h1>
					<p className="homevideo-subtitle1"> Connect with over 100,000 top-tier business professionals in our elite network. Unlock invaluable resources and relationships that drive business success.
					</p>
					<button className="btn custombutton-white">
						<Link to='/Enquiry' >PREVIEW MEMBERSHIP</Link>
					</button>
					
				</div>
				<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 video-details-logo">
					<div className="row">
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 video-details-logo-child">
							<img className='homelogo-sett logo1-size' src={DivLogo1}  alt='Logo'></img>
							<p>"A Community for Leaders."</p>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 video-details-logo-child">
							<img className='homelogo-sett logo2-size' src={DivLogo2}  alt='Logo'></img>
							<p>"A Community for Leaders."</p>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 video-details-logo-child">
							<img className='homelogo-sett logo3-size' src={DivLogo3}  alt='Logo'></img>
							<p>"A Community for Leaders."</p>
						</div>
					</div>
				</div>
				
			</div>
		</>
		
	);
};

export default HomeVideo;
