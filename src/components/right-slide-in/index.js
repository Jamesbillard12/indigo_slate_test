import './right-slide-in.scss'
import React from 'react'
import { renderIf } from '../../../lib/util.js'
import CategoryItem from '../category-item'
import PagesContainer from '../pages-container'
const Fragment = React.Fragment

class RightSlideIn extends React.Component {
	handleCategoryClick = id => {
		let tempArr = [...this.props.categoryIdArr]

		if (tempArr.indexOf(id) !== -1) {
			tempArr.splice(tempArr.indexOf(id), 1)
			this.props.handleUpdateCategoryIdArr(tempArr)
			return
		}

		tempArr.push(id)
		this.props.handleUpdateCategoryIdArr(tempArr)
	}

	isCategoryOpen = id => {
		if (this.props.categoryIdArr.indexOf(id) !== -1) {
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
						onClick={() => {
							this.props.handleSectionArrowClick('')
							this.props.handleUpdateCategoryIdArr([])
						}}
						className="fas fa-times"
					/>
				</div>

				<div
					style={{ height: `calc(${window.innerHeight}px - 23rem)` }}
					className="right-slide-in__content"
				>
					{this.props.section.categories.map((category, i) => {
						return (
							<Fragment key={category.id}>
								<CategoryItem
									handleSectionBodyClick={this.props.handleSectionBodyClick}
									category={category}
									handleCategoryClick={this.handleCategoryClick}
									handleUpdateSiteLocationCategory={
										this.props.handleUpdateSiteLocationCategory
									}
									handleCreateSiteLocation={this.props.handleCreateSiteLocation}
								/>
								{renderIf(
									category.pages.length,
									<PagesContainer
										category={category}
										categoryOpen={this.isCategoryOpen(category.id)}
										handleUpdateSiteLocationPage={
											this.props.handleUpdateSiteLocationPage
										}
										handleCreateSiteLocation={
											this.props.handleCreateSiteLocation
										}
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
