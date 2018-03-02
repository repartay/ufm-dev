import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStates } from '../../actions';

class AdminList extends Component {
	componentDidMount() {
		this.props.fetchStates();
	}
	renderCities() {
		return this.props.cities.map(city => {
			return (
				<div className="card darken-1" key={city._id}>
					<div className="card-content">
						<span className="card-title">
							<Link to={`/admin/${city.nameCity}`}>
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
				<div className="fixed-action-btn">
					<Link to="/admin/new" className="btn-floating btn-large red">
						<i className="material-icons">add</i>
					</Link>
				</div>
			</div>
		);
	}
};

function mapStateToProps(state) {
	return { cities: state.cities };
}

export default connect(mapStateToProps, { fetchStates })(AdminList);