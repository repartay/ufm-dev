import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StateList from './StateList';
import CitiesList from './CitiesList';

const Home = () => {
	return (
		<div>
			<h2>StateList</h2>
			<Switch>
				<Route exact path="/" component={StateList} />
				<Route path="/:stateId" component={CitiesList} />
			</Switch>
		</div>
	);
};

export default Home;
