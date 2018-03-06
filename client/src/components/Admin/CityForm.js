import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
// import FileInputSimple from './FileInputSimple';

class CityForm extends Component {
	render() {
		return (
			<div>
				City New
				<form onSubmit={this.props.handleSubmit(this.props.onCitySubmit)}>
					<label>State</label>
					<Field type="text" name="nameState" component="input" />
					<label>City</label>
					<Field type="text" name="nameCity" component="input" />
					<label>Restaurant List</label>
					{/* <Field component={FileInputSimple} name="restaurants" /> */}
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
