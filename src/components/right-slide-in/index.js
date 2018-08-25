import './right-slide-in.scss'
import React from 'react'
import { renderIf } from '../../../lib/util.js'
import CategoryItem from '../category-item'
import PagesContainer from '../pages-container'
const Fragment = React.Fragment

class RightSlideIn extends React.Component {
	state = {
		categoryIdArr: []
	}

	handleCategoryClick = id => {
		let tempArr = [...this.state.categoryIdArr]

		if (tempArr.indexOf(id) !== -1) {
			tempArr.splice(tempArr.indexOf(id), 1)
			this.setState({ categoryIdArr: tempArr })
			return
		}

		tempArr.push(id)
		this.setState({ categoryIdArr: tempArr })
	}

	isCategoryOpen = id => {
		if (this.state.categoryIdArr.indexOf(id) !== -1) {
			return true
		}

		return false
	}

	render() {
		return (
			<div
				style={{ height: `calc(${window.innerHeight}px - 17rem)` }}
				className={
					this.props.menuOpenRight ? 'right-slide-in open' : 'right-slide-in'
				}
			>
				<div className="right-slide-in__title">
					<p>{this.props.section.name || ''}</p>
					<i
						onClick={() => this.props.handleSectionArrowClick('')}
						className="fas fa-times"
					/>
				</div>

				<div
					style={{ height: `calc(${window.innerHeight}px - 23rem)` }}
					className="right-slide-in__content"
				>
					{this.props.section.categories.map(category => {
						return (
							<Fragment>
								<CategoryItem
									handleSectionBodyClick={this.props.handleSectionBodyClick}
									key={category.id}
									category={category}
									handleCategoryClick={this.handleCategoryClick}
								/>
								{renderIf(
									category.pages.length,
									<PagesContainer
										category={category}
										categoryOpen={this.isCategoryOpen(category.id)}
									/>
								)}
							</Fragment>
						)
					})}
				</div>
			</div>
		)
	}
}

export default RightSlideIn
