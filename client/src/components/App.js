import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import AdminDash from './Admin/AdminDash';
import CityNew from './Admin/CityNew';

const Dash = () => {
	return (
		<div>
			<h2>Dash</h2>
			<Link to="/state">States</Link>
		</div>
	)
}
// const CityNew = () => <h2>City New</h2>;
// const CityEdit = () => <h2>City Edit</h2>;

const App = () => {
	return (
		<div className="container">
			<BrowserRouter>
				<div>
					<Header />
					<Route path="/" exact component={Dash} />
					<Route exact path="/admin" component={AdminDash} />
					<Route path="/admin/new" component={CityNew} />
					<Route path="/state" component={Home} />
					<Route path="/ufm-redirect" component={
						() => window.location = 'http://userfriendlymaps.com'
					} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;