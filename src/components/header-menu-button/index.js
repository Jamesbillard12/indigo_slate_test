import './header-menu-button.scss'
import React from 'react'

const HeaderMenuButton = props => {
	return (
		<div onClick={props.handleMenuOpenClose} className="wrapper">
			<div className={props.menuOpen ? 'show-nav active' : 'show-nav'}>
				<span />
				<span />
				<span />
			</div>
		</div>
	)
}

export default HeaderMenuButton
