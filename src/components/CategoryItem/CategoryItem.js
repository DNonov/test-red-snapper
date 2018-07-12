import React, {Component} from "react";
import "./CategoryItem.css";

class CategoryItem extends Component {
	render() {
		return (
			<div className="category-item">
				<span className="category">{this.props.category}</span>
				<i className="zmdi zmdi-chevron-right icon"></i>
			</div>
		)
	}
}

export default CategoryItem;