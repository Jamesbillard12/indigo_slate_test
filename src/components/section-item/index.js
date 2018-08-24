import './section-item.scss'
import React from 'react'
import { renderIf } from '../../../lib/util.js'

const SectionItem = props => {
	return (
		<div className="section-item">
			<div className="section-item__icon">
				<i className={props.section.icon} />
			</div>
			<div className="section-item__text">
				<p>{props.section.name}</p>
			</div>
			{renderIf(
				props.section.categories.length,
				<div className="section-item__arrow_right">
					<i className="fas fa-angle-right" />
				</div>
			)}
		</div>
	)
}

export default SectionItem
