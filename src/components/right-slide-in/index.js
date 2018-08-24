import './right-slide-in.scss'
import React from 'react'

class RightSlideIn extends React.Component {
	render() {
		return (
			<div
				style={{ height: `calc(${window.innerHeight}px - 17rem)` }}
				className={
					this.props.menuOpenRight ? 'right-slide-in open' : 'right-slide-in'
				}
			>
				<div className="right-slide-in__title">
					<p>{this.props.section.name || 'no title'}</p>
					<i
						onClick={() => this.props.handleSectionClick('')}
						className="fas fa-times"
					/>
				</div>
			</div>
		)
	}
}

export default RightSlideIn
