import React, {Component} from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import "./CardCategories.css";

class CardCategories extends Component {
	render() {
		return(
			<div className="card-categories">
				<span className="card-categories-title">CATEGORIES</span>
				<CategoryItem category="Electronic devices"/>
				<CategoryItem category="Design"/>
				<CategoryItem category="Transportation"/>
			</div>
		)
	}
}

export default CardCategories;