import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCity } from '../actions';
import PlaceDetail from './PlaceDetail';
import './PlacesList.css';

class PlacesList extends Component {
	componentDidMount() {
		this.props.fetchCity(this.props.match.params.cityId);
	}
	renderTitle() {
		const city = this.props.city;
		const thisCityName = city[0] && city[0].namePretty;
		const thisStateName = city[0] && city[0].nameState;
		if (thisCityName && thisStateName) {
			return (<h2>{thisCityName}, {thisStateName} </h2>);
		}
	}
	renderRestaurants() {
		const city = this.props.city;

		console.log('city', city);
		const thisCityRestaurants = city[0] && city[0].restaurants;
		const nameCity = city[0] && city[0].namePretty;
		const nameState = city[0] && city[0].nameState;
		// console.log('thisCityRestaurants', thisCityRestaurants);
		if (thisCityRestaurants) {
			return thisCityRestaurants.map(r => {
				return (
					<div className="card darken-1" key={r._id}>
						<div className="card-content place-wrap">
							<span className="card-title">
								<PlaceDetail 
									nameCity={nameCity}
									nameState={nameState}
									name={r.name}
									address={r.address}
									phoneNumber={r.phoneNumber}
									twoWordDescription={r.twoWordDescription}

								/>
							</span>
						</div>
	          		</div>
				);
			})
		}
	}
	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				{this.renderTitle()}
				{this.renderRestaurants()}
			</div>
		);
	}
};

function mapStateToProps(state) {
	return { city: state.city };
}

export default connect(mapStateToProps, { fetchCity })(PlacesList);