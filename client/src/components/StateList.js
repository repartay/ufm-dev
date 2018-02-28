import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStates } from '../actions';
import { Link } from 'react-router-dom';

class StateList extends Component {
	componentDidMount() {
		this.props.fetchStates();
	}
	renderStates() {
		const allCities = _.uniqBy(this.props.cities, 'nameState');
		return (
			<div>
				{allCities.map(c => (
					<div className="card darken-1" key={c.nameCity}>
						<span className="card-title">
							<Link to={`/state/${c.nameState}`}>
								{c.nameState.toUpperCase()}
							</Link>
						</span>
					</div>
				))}
			</div>
		);
	}
	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				{this.renderStates()}
			</div>
		);
	}
};

function mapStateToProps(state) {
	return { cities: state.cities };
}

export default connect(mapStateToProps, { fetchStates })(StateList);