import './category-item.scss'
import React from 'react'
import { renderIf } from '../../../lib/util.js'

class CategoryItem extends React.Component {
	state = {
		categoryOpen: false
	}
	handleCategoryOpen = () => {
		this.setState({ categoryOpen: !this.state.categoryOpen })
	}
	render() {
		console.log(this.props.category.pages)
		return (
			<div onClick={() => this.handleCategoryOpen()} className="category-item">
				<div
					// onClick={() => this.props.handleCategoryBodyClick(this.props.category.id)}
					className="category-item__body"
				>
					<div className="category-item__text">
						<p>{this.props.category.name}</p>
					</div>
				</div>
				{renderIf(
					this.props.category.pages.length,
					<div
						// onClick={() => this.props.handleCategoryArrowClick(this.props.category.id)}
						className="category-item__arrow_up"
					>
						<i
							className={
								this.state.categoryOpen
									? 'fas fa-angle-down'
									: 'fas fa-angle-up'
							}
						/>
					</div>
				)}
			</div>
		)
	}
}

export default CategoryItem
