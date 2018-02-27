import React from 'react';
import { CityAPI } from './StateList';

const CitiesList = (props) => {
	const state = CityAPI.get(
		props.match.params.stateId
	)
	console.log('props', props);
	return (
		<div style={{ textAlign: 'center' }}>
			CitiesList
			<h1>{state.nameState}</h1>
		</div>
	);
};

export default CitiesList;