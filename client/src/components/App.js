import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';

const Header = () => <h2>Header</h2>;

// const CityNew = () => <h2>City New</h2>;
// const CityEdit = () => <h2>City Edit</h2>;

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Header />
					<Route path="/" exact component={Home} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;