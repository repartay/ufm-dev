import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCityEdit } from '../actions';

class PlacesList extends Component {
	componentDidMount() {
		this.props.fetchCityEdit(this.props.match.params.cityId);
	}
	renderRestaurants() {
		const city = this.props.cities;
		const thisCityRestaurants = city[0].restaurants;
		return thisCityRestaurants.map(r => {
			return (
				<div className="card darken-1" key={r._id}>
					<div className="card-content">
						<span className="card-title">
							{r.name}
						</span>
					</div>
          		</div>
			);
		})
	}
	render() {
		const city = this.props.cities;
		const thisCityName = city[0].namePretty;
		const thisStateName = city[0].nameState;
		return (
			<div style={{ textAlign: 'center' }}>
				<h2>{thisCityName}, {thisStateName} </h2>
				{this.renderRestaurants()}
			</div>
		);
	}
};

function mapStateToProps(state) {
	return { cities: state.cities };
}

export default connect(mapStateToProps, { fetchCityEdit })(PlacesList);