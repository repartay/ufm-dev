import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCities } from '../actions';
// import { CityAPI } from './StateList';

class CitiesList extends Component {
	componentDidMount() {
		console.log('---stateId', this.props.match.params.stateId);
		this.props.fetchCities(this.props.match.params.stateId);
	}
	renderCities() {
		return this.props.cities.map(city => {
			return (
				<div className="card darken-1" key={city._id}>
					<div className="card-content">
						<span className="card-title">{city.name || city.nameCity}</span>
					</div>
          		</div>
			);
		})
	}
	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				{this.renderCities()}
			</div>
		);
	}
};

function mapStateToProps(state) {
	return { cities: state.cities };
}

export default connect(mapStateToProps, { fetchCities })(CitiesList);