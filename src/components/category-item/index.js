import './category-item.scss'
import React from 'react'
import { renderIf } from '../../../lib/util.js'

class CategoryItem extends React.Component {
	state = {
		categoryOpen: false
	}
	handleCategoryOpen = id => {
		if (this.props.category.pages.length) {
			this.setState({ categoryOpen: !this.state.categoryOpen })
			this.props.handleCategoryClick(id)
			this.props.handleUpdateSiteLocationCategory(this.props.category.name)
		} else {
			this.props.handleSectionBodyClick()
			this.props
				.handleUpdateSiteLocationCategory(this.props.category.name)
				.then(() => {
					this.props.handleCreateSiteLocation()
				})
		}
	}
	render() {
		return (
			<div
				onClick={() => this.handleCategoryOpen(this.props.category.id)}
				className={
					this.state.categoryOpen ? 'category-item open' : 'category-item'
				}
			>
				<div className="category-item__body">
					<div className="category-item__text">
						<p>{this.props.category.name}</p>
					</div>
				</div>
				{renderIf(
					this.props.category.pages.length,
					<div className="category-item__arrow_up">
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
