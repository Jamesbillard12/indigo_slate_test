import './site-location-bar.scss'
import React from 'react'

const SiteLocationBar = props => {
	return (
		<div className="site-location-bar">
			<div className="site-location-bar__text">
				<p>
					{props.section ? props.section : 'Section'}{' '}
					{props.pageTitle ? `> ${props.pageTitle}` : '> Page Title'}
				</p>
			</div>
		</div>
	)
}

export default SiteLocationBar
