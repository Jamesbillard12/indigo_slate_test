import './site-location-bar.scss'
import { renderIf } from '../../../lib/util.js'
import React from 'react'

const SiteLocationBar = props => {
	return (
		<div className="site-location-bar">
			<div className="site-location-bar__text">
				{renderIf(
					props.siteLocation,
					<p>{props.siteLocation}</p>,
					<p>section > page title</p>
				)}
			</div>
		</div>
	)
}

export default SiteLocationBar
