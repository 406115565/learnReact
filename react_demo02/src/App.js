import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

const CustomLinkExample = () => (
	<Router>
		<div>
			<OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
			<OldSchoolMenuLink to="/about" label="About" />
			<hr />
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Test />
		</div>
	</Router>
)

const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
	<Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
		<div className={match ? 'active' : ''}>
			{match ? '> ' : ''}<Link to={to}>{label}</Link>
		</div>
	)} />
)

const Home = () => (
	<div>
		<h2>Home</h2>
	</div>
)

const About = () => (
	<div>
		<h2>About</h2>
	</div>
)

const Test = () => (
	<h2>
		<MyLink name='leon' />
		<MyLink name='pitt' />
		<MyLink name='anni' />
		<MyLink name='howard' />
		<MyLink name='depp' />
	</h2>
)


const MyLink = ({ name }) => (
	<Route children={() => {
		return (
			<div><i>{name}</i></div>
		)
	}} />
)
export default CustomLinkExample