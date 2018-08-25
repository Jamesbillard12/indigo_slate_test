import './section-item.scss'
import React from 'react'
import { renderIf } from '../../../lib/util.js'

const SectionItem = props => {
	return (
		<div className={props.menuOpen ? 'section-item fadein' : 'section-item'}>
			<div
				onClick={() => {
					props.handleSectionBodyClick(props.section.id)
					props.handleUpdateSiteLocationSection(props.section.name).then(() => {
						props.handleCreateSiteLocation()
					})
				}}
				className={
					props.selected ? 'section-item__body--selected' : 'section-item__body'
				}
			>
				<div className="section-item__icon">
					<i
						className={
							props.notSelected
								? props.section.icon + ' transparent'
								: props.section.icon
						}
					/>
				</div>
				<div className="section-item__text">
					<p>{props.section.name}</p>
				</div>
			</div>
			{renderIf(
				props.section.categories.length,
				<div
					onClick={() => {
						props.handleSectionArrowClick(props.section.id)
						props.handleUpdateSiteLocationSection(props.section.name)
					}}
					className={
						props.selected
							? 'section-item__arrow_right--selected'
							: 'section-item__arrow_right'
					}
				>
					<i className="fas fa-angle-right" />
				</div>
			)}
		</div>
	)
}

export default SectionItem
