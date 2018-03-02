import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
// import Dropzone from 'react-dropzone';
// import csv from 'csv';
// import FileInput from './FileInput';
// import SimpleUploaderCsv from './SimpleUploaderCsv';
// import { fileUploader } from './fileUploader';

// <input type="submit" value="Upload City" />
class CityForm extends Component {
	render() {
		
		return (
			<div>
				City New
				<form onSubmit={this.props.handleSubmit(this.props.onCitySubmit)}>
					<label>State</label>
					<Field type="text" name="nameState" component="input" />
					<label>City</label>
					<Field type="text" label="City" name="nameCity" component="input" />
					<label>Restaurant List</label>
					{/* <Field component={FileInput} name="restaurants" accepts="*.csv" /> */}
					{/* <Field component={SimpleUploaderCsv} name="restaurants" accepts="*.csv" /> */}
					{/* <Field component="input" name="file" accepts="*.csv" /> */}
					{/* <SimpleUploaderCsv /> */}
	        		<button
	        			type="submit"
						className="green white-text btn-flat right"
					>
	          			Save City
	          			<i className="material-icons right">email</i>
	        		</button>
	    		</form>
			</div>
		);
	}
};

export default reduxForm({
	form: 'newCityForm'
})(CityForm);
