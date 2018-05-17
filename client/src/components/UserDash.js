import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import { fetchStates } from '../actions';

class UserDash extends Component {
	componentDidMount() {
		this.props.fetchStates();
	}
	renderCities() {
		return this.props.cities.map(city => {
			return (
				<div className="card darken-1" key={city._id}>
					<div className="card-content">
						<span className="card-title">
							<Link to={`/${city.nameCity}`}>
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
			<div>
				<Header />
					<div style={{ textAlign: 'center' }}>
						{this.renderCities()}
					</div>
			</div>
		);
	}
};

function mapStateToProps(state) {
	return { cities: state.cities };
}

export default connect(mapStateToProps, { fetchStates })(UserDash);