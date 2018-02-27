import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';

// const CityNew = () => <h2>City New</h2>;
// const CityEdit = () => <h2>City Edit</h2>;

const App = () => {
	return (
		<div className="container">
			<BrowserRouter>
				<div>
					<Header />
					<Route path="/" exact component={Home} />
					<Route path="/ufm-redirect" component={
						() => window.location = 'http://userfriendlymaps.com'
					} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;