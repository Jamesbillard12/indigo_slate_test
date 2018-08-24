import './landing.scss'
import React from 'react'
import Header from '../header'
import SiteLocationBar from '../site-location-bar'
import LeftSlideIn from '../left-slide-in'
import RightSlideIn from '../right-slide-in'
import Sections from '../../../data/sections.js'

class Landing extends React.Component {
	state = {
		menuOpen: false,
		menuOpenRight: false,
		sections: Sections,
		sectionId: ''
	}

	handleMenuOpenClose = () => {
		this.setState({ menuOpen: !this.state.menuOpen })
	}

	handleSectionClick = id => {
		this.setState({ sectionId: id, menuOpenRight: !this.state.menuOpenRight })
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
				{this.state.sections.map(section => {
					if (section.id === this.state.sectionId) {
						return (
							<RightSlideIn
								section={section}
								key={section.id}
								menuOpenRight={this.state.menuOpenRight}
							/>
						)
					} else {
						return null
					}
				})}
			</div>
		)
	}
}

export default Landing
