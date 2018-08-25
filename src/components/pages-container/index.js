import './pages-container.scss'
import React from 'react'
import PagesItem from '../pages-item'

class PagesContainer extends React.Component {
	render() {
		return (
			<div
				className={
					this.props.categoryOpen ? 'pages-container active' : 'pages-container'
				}
			>
				{this.props.category.pages.map(page => {
					return <PagesItem key={page.id} page={page} />
				})}
			</div>
		)
	}
}

export default PagesContainer
