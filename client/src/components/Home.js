import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StateList from './StateList';
import CitiesList from './CitiesList';

const Home = () => {
	return (
		<Switch>
			<Route exact path="/state" component={StateList} />
			<Route path="/state/:stateId" component={CitiesList} />
		</Switch>
	);
};

export default Home;
