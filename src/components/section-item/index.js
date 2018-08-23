import './section-item.scss'
import React from 'react'

const SectionItem = props => {
	return (
		<div className="section-item">
			<div className="section-item__icon">
				<i class="fab fa-500px" />
			</div>
			<div className="section-item__text">
				<p>Hello</p>
			</div>
			<div className="section-item__arrow_right">
				<i class="fas fa-angle-right" />
			</div>
		</div>
	)
}

export default SectionItem
