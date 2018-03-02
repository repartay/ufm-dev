import React from 'react';
// import csvToJson from'convert-csv-to-json';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import SimpleUploaderCsv from './SimpleUploaderCsv';

const CityReview = ({ onCancel, formValues, submitNew, history }) => {
	console.log('formValues ', formValues);
	console.log('submitNew', submitNew);
	// let json = csvToJson.getJsonFromCsv(formValues.restaurants);
	
	// console.log('json', json);
	return (
		<div>
			<h5>Please review your entries</h5>
			<button
				className="yellow darken-3 white-text btn-flat"
				onClick={onCancel}
			>
          		Back
          		<i className="material-icons right">cancel</i>
        	</button>
        	<SimpleUploaderCsv />
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
