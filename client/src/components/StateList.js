import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';

export const CityAPI = {
	cities: [
		{ id: 1, nameCity: "knoxville", nameState: "tn" },
		{ id: 2, nameCity: "nashville", nameState: "tn" },
		{ id: 3, nameCity: "atlanta", nameState: "ga",  }
	],
	all: function() { return _.uniqBy(this.cities, 'nameState') },
	get: function(nameState) {
    	const isState = c => c.nameState === nameState
    	return this.cities.find(isState)
  	}
};

const StateList = () => {
	return (
		<div>
			<ul>
				{
					CityAPI.all().map(c => (
						<li key={c.id}>
							<Link to={`/state/${c.nameState}`}>{c.nameState.toUpperCase()}</Link>
						</li>
					))
				}
			</ul>
		</div>
	);
};

export default StateList;