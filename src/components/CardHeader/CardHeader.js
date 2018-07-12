import React, {Component} from "react";
import "./CardHeader.css";


class CardHeader extends Component {
	render() {
		return (
			<div className="card-header">
				<div className="row-container">
					<h1>{this.props.nameTitle}</h1>
					<i className="material-icons md-24">more_horiz</i>
				</div>
				<div className="row-container-follow">
					<i className="material-icons md-24 add-icon">add_circle_outline</i>
					<span>FOLLOW</span>
				</div>
			</div>
		)
	}
}

export default CardHeader;