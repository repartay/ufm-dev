import _ from 'lodash';
import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const CityAPI = {
	cities: [
		{ id: 1, nameCity: "knoxville", nameState: "tn" },
		{ id: 2, nameCity: "nashville", nameState: "tn" },
		{ id: 3, nameCity: "atlanta", nameState: "ga",  }
	],
	all: function() { return _.uniqBy(this.cities, 'nameState') }
};

const Header = () => <h2>Header</h2>;
const StateList = () => (
	<div>
		<ul>
			{
				CityAPI.all().map(c => (
					<li key={c.id}>
						<Link to={`/${c.nameState}`}>{c.nameState.toUpperCase()}</Link>
					</li>
				))
			}
		</ul>
	</div>
)
const CitiesList = () => <h2>CitiesList</h2>;
const Home = () => (
	<div>
		<h2>StateList</h2>
		<Switch>
			<Route exact path="/" component={StateList} />
			<Route path="/:stateId" component={CitiesList} />
		</Switch>
	</div>
)
// const CityNew = () => <h2>City New</h2>;
// const CityEdit = () => <h2>City Edit</h2>;

const App = () => {
	console.log('cityApi', CityAPI);
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