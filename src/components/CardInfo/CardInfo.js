import React, {Component} from "react";
import CardInfoItem from "../CardInfoItem/CardInfoItem";
import "./CardInfo.css";

class CardInfo extends Component {
	render() {
		return(
			<div className="card-info">
				<CardInfoItem subject="PATENTS" quantity="313" />
				<CardInfoItem subject="FOLLOWERS" quantity="1M 50k" />
				<CardInfoItem subject="FOLLOWING" quantity="361" />
			</div>
		)
	}
}

export default CardInfo;