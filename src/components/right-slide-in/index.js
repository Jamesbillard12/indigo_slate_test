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
				<div className="right-slide-in__title">
					<span>{this.props.section.name || 'no title'}</span>
				</div>
			</div>
		)
	}
}

export default RightSlideIn
