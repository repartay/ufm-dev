import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class CityForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onCitySubmit)}>
          <label>State - Abbv</label>
          <Field type="text" name="nameState" component="input" />
          <label>City Pretty Name</label>
          <Field type="text" name="namePretty" component="input" />
          <label>City Ugly Name- No spaces</label>
          <Field type="text" name="nameCity" component="input" />
          <label>SVG Uri - Production link from RawGist.com</label>
          <Field type="text" name="svgUri" component="input" />
            <button type="submit" className="green white-text btn-flat right">
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
