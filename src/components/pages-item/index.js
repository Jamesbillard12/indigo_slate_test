import './pages-item.scss'
import React from 'react'

const PagesItem = props => {
	return (
		<div
			onClick={() => {
				props.handleUpdateSiteLocationPage(props.page.name)
				props.handleCreateSiteLocation()
			}}
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
