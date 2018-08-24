import './category-item.scss'
import React from 'react'
import { renderIf } from '../../../lib/util.js'

class CategoryItem extends React.Component {
	constructor() {
		super()
	}

	componentDidMount() {
		this.handleClick()
	}

	handleClick = () => {
		const acc = this._acc.children
		for (let i = 0; i < acc.length; i++) {
			let a = acc[i]
			a.onclick = () => a.classList.toggle('active')
		}
	}

	render() {
		console.log(this.props.category.pages)
		return (
			<div
				ref={a => (this._acc = a)}
				onClick={this.handleClick}
				className="category-item"
			>
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
						<i className="fas fa-angle-up" />
					</div>
				)}
				{this.props.children}
			</div>
		)
	}
}

export default CategoryItem
