import './landing.scss'
import React from 'react'
import Header from '../header'
import SiteLocationBar from '../site-location-bar'
import LeftSlideIn from '../left-slide-in'
import Sections from '../../../data/sections.js'

class Landing extends React.Component {
	state = {
		menuOpen: false,
		sections: Sections
	}

	handleMenuOpenClose = () => {
		this.setState({ menuOpen: !this.state.menuOpen })
	}

	handleSectionClick = id => {
		console.log('hello world', id)
	}

	render() {
		return (
			<div style={{ height: window.innerHeight }} className="landing">
				<Header
					menuOpen={this.state.menuOpen}
					handleMenuOpenClose={this.handleMenuOpenClose}
				/>
				<SiteLocationBar />
				<LeftSlideIn
					sections={this.state.sections}
					menuOpen={this.state.menuOpen}
					handleSectionClick={this.handleSectionClick}
				/>
			</div>
		)
	}
}

export default Landing
