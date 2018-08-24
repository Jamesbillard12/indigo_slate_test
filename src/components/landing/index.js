import './landing.scss'
import React from 'react'
import Header from '../header'
import SiteLocationBar from '../site-location-bar'
import LeftSlideIn from '../left-slide-in'

class Landing extends React.Component {
	state = {
		menuOpen: false,
		sections: [
			{ id: 0, name: 'my schedule & biddings', categories: [], icon: '' },
			{ id: 1, name: 'safety', categories: [], icon: '' },
			{ id: 2, name: 'training', categories: [], icon: '' },
			{ id: 3, name: 'administration', categories: [], icon: '' },
			{ id: 4, name: 'catering & brand', categories: [], icon: '' },
			{ id: 5, name: 'hotels', categories: [], icon: '' },
			{ id: 6, name: 'my base', categories: [], icon: '' },
			{ id: 7, name: 'recognition', categories: [], icon: '' },
			{ id: 8, name: 'my leadership team', categories: [], icon: '' }
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
