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
		sectionId: '',
		selectedSection: { categories: [] },
		categoryIdArr: []
	}

	handleUpdateCategoryIdArr = arr => {
		this.setState({ categoryIdArr: arr })
	}

	handleMenuOpenClose = () => {
		this.setState({
			menuOpen: !this.state.menuOpen,
			menuOpenRight: false,
			selectedSection: { categories: [] },
			categoryIdArr: []
		})
	}

	handleSectionBodyClick = id => {
		if (this.state.menuOpenRight && id) {
			this.setState({
				menuOpenRight: false,
				selectedSection: { categories: [] }
			})
			return
		}
		this.setState({
			menuOpen: false,
			menuOpenRight: false
		})
	}
	handleSectionArrowClick = id => {
		if (id === '') {
			this.setState({
				sectionId: id,
				menuOpenRight: false,
				selectedSection: { categories: [] }
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
					menuOpenRight={this.state.menuOpenRight}
					selectedSection={this.state.selectedSection}
					handleSectionArrowClick={this.handleSectionArrowClick}
					handleSectionBodyClick={this.handleSectionBodyClick}
				/>

				<RightSlideIn
					menuOpenRight={this.state.menuOpenRight}
					categoryIdArr={this.state.categoryIdArr}
					section={this.state.selectedSection}
					handleSectionArrowClick={this.handleSectionArrowClick}
					handleSectionBodyClick={this.handleSectionBodyClick}
					handleUpdateCategoryIdArr={this.handleUpdateCategoryIdArr}
				/>
			</div>
		)
	}
}

export default Landing
