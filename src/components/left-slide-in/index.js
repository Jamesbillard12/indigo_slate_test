import './left-slide-in.scss'
import React from 'react'

class LeftSlideIn extends React.Component {
	render() {
		return (
			<div
				className={this.props.menuOpen ? 'left-slide-in open' : 'left-slide-in'}
			>
				<div className="left-slide-in__img">
					<p className={this.props.menuOpen ? 'fadein' : ''}>
						Hello {this.props.user ? this.props.user : 'User'}
					</p>
				</div>
				<div className="left-slide-in__content" />
			</div>
		)
	}
}

export default LeftSlideIn
