import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const CityReview = ({ onCancel, formValues, submitNew, history }) => {
	console.log('formValues ', formValues);
	return (
		<div>
			<h5>Please review your entries</h5>
			<div>
				<label>City Name Pretty</label>
				<div>
					{formValues.namePretty}
				</div>
				<label>URI City Name</label>
				<div>
					{formValues.nameCity}
				</div>
				<label>State</label>
				<div>
					{formValues.nameState}
				</div>
			</div>
			<button
				className="yellow darken-3 white-text btn-flat"
				onClick={onCancel}
			>
          		Back
          		<i className="material-icons right">cancel</i>
        	</button>
        	<button
        		onClick={() => submitNew(formValues, history)}
				className="green white-text btn-flat right"
			>
          		Save City
          		<i className="material-icons right">send</i>
        	</button>
        </div>
	);
};

function mapStateToProps(state) {
	return { formValues: state.form.newCityForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(CityReview));
