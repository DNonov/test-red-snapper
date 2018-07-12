import React, {Component} from "react";
import SteveJobsImage from "../../media/steve-jobs-presenting.jpg";
import "./HeroImage.css";

class HeroImage extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="arrow-back">
					<i className="zmdi zmdi-chevron-left"></i>
					<span className="arrow-back-text">Back</span>
				</div>
				<div className="hero-image-section">
					<img src={SteveJobsImage} alt="steve-jobs-presenting"></img>
				</div>
			</React.Fragment>
		)
	}
}

export default HeroImage;