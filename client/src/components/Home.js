import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StateList from './StateList';
import CitiesList from './CitiesList';
import PlacesList from './PlacesList';

const Home = () => {
	return (
		<Switch>
			<Route exact path="/state" component={StateList} />
			<Route exact path="/state/:stateId" component={CitiesList} />
			<Route exact path="/state/:stateId/:cityId" component={PlacesList} />
		</Switch>
	);
};

export default Home;
