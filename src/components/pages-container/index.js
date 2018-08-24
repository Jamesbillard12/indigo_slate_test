import './pages-container.scss'
import React from 'react'

class PagesContainer extends React.Component {
	render() {
		return (
			<div
				className={
					this.props.categoryOpen ? 'pages-container active' : 'pages-container'
				}
			>
				<p>hello</p>
				<p>hello</p>
				<p>hello</p>
				<p>hello</p>
			</div>
		)
	}
}

export default PagesContainer
