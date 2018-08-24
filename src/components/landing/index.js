import './landing.scss'
import React from 'react'
import { renderIf } from '../../../lib/util.js'
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
		sectionId: '',
		selectedSection: {}
	}

	handleMenuOpenClose = () => {
		this.setState({ menuOpen: !this.state.menuOpen, menuOpenRight: false })
	}

	handleSectionBodyClick = id => {
		if (this.state.menuOpenRight) {
			this.setState({ menuOpenRight: false })
			return
		}
		this.setState({
			menuOpen: false
		})
	}
	handleSectionArrowClick = id => {
		if (id === '') {
			this.setState({
				sectionId: id,
				menuOpenRight: false,
				selectedSection: {}
			})
		} else {
			let tempArr = [...this.state.sections]
			let selectedSection
			for (let section of tempArr) {
				if (section.id === id) {
					selectedSection = section
					break
				}
			}
			if (selectedSection.categories.length) {
				this.setState({
					sectionId: id,
					menuOpenRight: true,
					selectedSection: selectedSection
				})
			} else {
				this.setState({
					menuOpen: false
				})
			}
		}
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
					handleSectionArrowClick={this.handleSectionArrowClick}
					handleSectionBodyClick={this.handleSectionBodyClick}
				/>

				<RightSlideIn
					section={this.state.selectedSection}
					menuOpenRight={this.state.menuOpenRight}
					handleSectionArrowClick={this.handleSectionArrowClick}
					handleSectionBodyClick={this.handleSectionBodyClick}
				/>
			</div>
		)
	}
}

export default Landing
