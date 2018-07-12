import React, {Component} from "react";
import SteveJobsImage from "../../media/steve-jobs-presenting.jpg";
import "./HeroImage.css";

class HeroImage extends Component {
	render() {
		return (
			<div className="hero-image-section">
				<img src={SteveJobsImage} alt="steve-jobs-presenting"></img>
			</div>
		)
	}
}

export default HeroImage;