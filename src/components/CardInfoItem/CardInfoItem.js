import React, {Component} from "react";
import "./CardInfoItem.css";

class CardInfoItem extends Component {
	render() {
		return (
			<div className="card-info-item">
				<span className="card-info-item quantity">{this.props.quantity}</span>
				<span className="card-info-item subject">{this.props.subject}</span>
			</div>
		)
	}
}

export default CardInfoItem;