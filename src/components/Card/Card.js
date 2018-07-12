import React, {Component} from "react";
import CardHeader from "../CardHeader/CardHeader";
import CardInfo from "../CardInfo/CardInfo";
import CardCategories from "../CardCategories/CardCategories";
import "./Card.css";

class Card extends Component {
	render() {
		return (
			<div className="card">
				<CardHeader nameTitle="Steve Jobs"/>
				<CardInfo />
				<CardCategories />
			</div>
		)
	}
}

export default Card;