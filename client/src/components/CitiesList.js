import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCities } from '../actions';

class CitiesList extends Component {
	componentDidMount() {
		console.log('---stateId', this.props.match.params.stateId);
		this.props.fetchCities(this.props.match.params.stateId);
	}
	renderCities() {
		const stateId = this.props.match.params.stateId;
		console.log('stateId', stateId);
		return this.props.cities.map(city => {
			return (
				<div className="card darken-1" key={city._id}>
					<div className="card-content">
						<span className="card-title">
							<Link to={`/state/${stateId}/${city.nameCity}`}>
								{city.name || city.nameCity}
							</Link>
						</span>
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