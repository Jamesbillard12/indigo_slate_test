import './left-slide-in.scss'
import React from 'react'
import SectionItem from '../section-item'

class LeftSlideIn extends React.Component {
	render() {
		return (
			<div
				style={{ height: window.innerHeight }}
				className={this.props.menuOpen ? 'left-slide-in open' : 'left-slide-in'}
			>
				<div className="left-slide-in__img">
					<p className={this.props.menuOpen ? 'fadein' : ''}>
						Hello {this.props.user ? this.props.user : 'User'}
					</p>
				</div>
				<div
					style={
						this.props.menuOpenRight
							? {
									height: `calc(${window.innerHeight}px - 17rem)`,
									overflow: 'hidden'
							  }
							: {
									height: `calc(${window.innerHeight}px - 17rem)`
							  }
					}
					className="left-slide-in__content"
				>
					{this.props.sections.map(section => {
						return (
							<SectionItem
								selected={section.id === this.props.selectedSection.id}
								notSelected={
									!isNaN(this.props.selectedSection.id) &&
									section.id !== this.props.selectedSection.id
								}
								handleSectionArrowClick={this.props.handleSectionArrowClick}
								handleSectionBodyClick={this.props.handleSectionBodyClick}
								key={section.id}
								section={section}
								menuOpen={this.props.menuOpen}
								handleUpdateSiteLocationSection={
									this.props.handleUpdateSiteLocationSection
								}
							/>
						)
					})}
				</div>
			</div>
		)
	}
}

export default LeftSlideIn
