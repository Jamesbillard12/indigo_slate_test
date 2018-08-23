import './header.scss'
import React from 'react'
import HeaderMenuButton from '../header-menu-button'

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="header__logo" />
				<HeaderMenuButton />
			</div>
		)
	}
}

export default Header
