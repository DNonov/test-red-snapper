import React, {Component} from "react";
import "./CardHeader.css";


class CardHeader extends Component {
	render() {
		return (
			<div className="card-header">
				<div className="row-container">
					<h1>{this.props.nameTitle}</h1>
					<i className="zmdi zmdi-more"></i>
				</div>
				<div className="row-container-follow">
				<i className="zmdi zmdi-plus-circle-o add-icon"></i>
					<span>FOLLOW</span>
				</div>
			</div>
		)
	}
}

export default CardHeader;