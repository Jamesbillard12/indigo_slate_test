import './pages-item.scss'
import React from 'react'

const PagesItem = props => {
	return (
		<div
			// onClick={() => this.handleCategoryOpen(this.props.category.id)}
			className="pages-item"
		>
			<div className="pages-item__body">
				<div className="pages-item__text">
					<p>{props.page.name}</p>
				</div>
			</div>
		</div>
	)
}

export default PagesItem
