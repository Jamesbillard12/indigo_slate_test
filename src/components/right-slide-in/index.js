import './right-slide-in.scss'
import React from 'react'
import CategoryItem from '../category-item'
import { renderIf } from '../../../lib/util'

class RightSlideIn extends React.Component {
	render() {
		return (
			<div
				style={{ height: `calc(${window.innerHeight}px - 17rem)` }}
				className={
					this.props.menuOpenRight ? 'right-slide-in open' : 'right-slide-in'
				}
			>
				<div className="right-slide-in__title">
					<p>{this.props.section.name || 'no title'}</p>
					<i
						onClick={() => this.props.handleSectionArrowClick('')}
						className="fas fa-times"
					/>
				</div>

				<div className="right-slide-in__content">
					{this.props.section.categories.map(category => {
						return (
							<CategoryItem
								// handleSectionArrowClick={this.props.handleSectionArrowClick}
								// handleSectionBodyClick={this.props.handleSectionBodyClick}
								key={category.id}
								category={category}
							/>
						)
					})}
				</div>
			</div>
		)
	}
}

export default RightSlideIn
