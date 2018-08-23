import React from 'react'
import Header from '../header'

class Landing extends React.Component {
	state = { menuOpen: false }

	handleMenuOpenClose = () => {
		this.setState({ menuOpen: !this.state.menuOpen })
	}

	render() {
		return (
			<div>
				<Header
					menuOpen={this.state.menuOpen}
					handleMenuOpenClose={this.handleMenuOpenClose}
				/>
			</div>
		)
	}
}

export default Landing
