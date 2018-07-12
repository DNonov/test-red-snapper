import React, {Component} from "react";
import "./CategoryItem.css";

class CategoryItem extends Component {
	render() {
		return (
			<div className="category-item">
				<span className="category">{this.props.category}</span>
				<i className="material-icons md-24 icon">keyboard_arrow_right</i>
			</div>
		)
	}
}

export default CategoryItem;