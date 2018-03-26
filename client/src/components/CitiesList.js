import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCities } from '../actions';

class CitiesList extends Component {
	componentDidMount() {
		this.props.fetchCities(this.props.match.params.stateId);
	}
	renderCities() {
		const stateId = this.props.match.params.stateId;
		return this.props.cities.map(city => {
			return (
				<div className="card darken-1" key={city._id}>
					<div className="card-content">
						<span className="card-title">
							<Link to={`/state/${stateId}/city/${city.nameCity}`}>
								{city.namePretty}
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