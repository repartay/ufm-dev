import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCity } from '../actions';
import PlaceDetail from './PlaceDetail';

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
		const thisCityRestaurants = city[0] && city[0].restaurants;
		if (thisCityRestaurants) {
			return thisCityRestaurants.map(r => {
				return (
					<div className="card darken-1" key={r._id}>
						<div className="card-content">
							<span className="card-title">
								<PlaceDetail name={r.name} address={r.address} phoneNumber={r.phoneNumber} />
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