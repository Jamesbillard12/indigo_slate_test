import './landing.scss'
import React from 'react'
import Header from '../header'
import SiteLocationBar from '../site-location-bar'
import LeftSlideIn from '../left-slide-in'

class Landing extends React.Component {
	state = {
		menuOpen: false,
		sections: [
			{
				id: 0,
				name: 'my schedule & biddings',
				categories: [1, 2, 3],
				icon: 'fas fa-calendar-alt'
			},
			{ id: 1, name: 'safety', categories: [1, 2, 3, 4], icon: 'fas fa-lock' },
			{ id: 2, name: 'training', categories: [], icon: 'fas fa-dumbbell' },
			{
				id: 3,
				name: 'administration',
				categories: [],
				icon: 'fas fa-user-tie'
			},
			{
				id: 4,
				name: 'catering & brand',
				categories: [],
				icon: 'fas fa-utensils'
			},
			{ id: 5, name: 'hotels', categories: [], icon: 'fas fa-hotel' },
			{ id: 6, name: 'my base', categories: [], icon: 'fas fa-home' },
			{ id: 7, name: 'recognition', categories: [], icon: 'fas fa-brain' },
			{
				id: 8,
				name: 'my leadership team',
				categories: [],
				icon: 'fas fa-users'
			}
		]
	}

	handleMenuOpenClose = () => {
		this.setState({ menuOpen: !this.state.menuOpen })
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
				/>
			</div>
		)
	}
}

export default Landing
