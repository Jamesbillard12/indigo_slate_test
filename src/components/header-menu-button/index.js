import './header-menu-button.scss'
import React from 'react'

class HeaderMenuButton extends React.Component {
	render() {
		return (
			<div className="wrapper">
				<div className="show-nav">
					<span />
					<span />
					<span />
				</div>
				<div id="logo" className="h1">
					<a
						href="https://www.mobify.com"
						rel="nofollow"
						title="Mobify"
						className="m-all t-all d-all"
					>
						<p className="logo-desc m-all t-all d-all">&nbsp;</p>
					</a>
				</div>
			</div>
		)
	}
}

export default HeaderMenuButton
