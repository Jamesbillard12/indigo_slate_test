import './site-location-bar.scss'
import { renderIf } from '../../../lib/util.js'
import React from 'react'

const SiteLocationBar = props => {
	console.log(props)
	return (
		<div className="site-location-bar">
			<div className="site-location-bar__text">
				{renderIf(
					props.sectionTitle,
					<p>
						{props.sectionTitle ? props.sectionTitle : ''}{' '}
						{props.categoryTitle ? `> ${props.categoryTitle} ` : ''}
						{props.pageTitle ? `> ${props.pageTitle}` : ''}
					</p>,
					<p>section > page title</p>
				)}
			</div>
		</div>
	)
}

export default SiteLocationBar
