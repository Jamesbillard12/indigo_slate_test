import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from '../landing'
const Fragment = React.Fragment

class App extends React.Component {
	render() {
		return (
			<Fragment>
				<BrowserRouter>
					<Route exact path="/" component={Landing} />
				</BrowserRouter>
			</Fragment>
		)
	}
}

export default App
