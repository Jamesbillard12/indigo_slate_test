import './right-slide-in.scss'
import React from 'react'

class RightSlideIn extends React.Component {
	render() {
		return (
			<div
				style={{ height: window.innerHeight }}
				className={
					this.props.menuOpenRight ? 'right-slide-in open' : 'right-slide-in'
				}
			>
				<h1>place holder</h1>
			</div>
		)
	}
}

export default RightSlideIn
