import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import CityForm from './CityForm';
import CityReview from './CityReview';

class CityNew extends Component {
  state = { showFormReview: false };
  renderContent() {
    if (this.state.showFormReview) {
      return <CityReview
        onCancel={() => this.setState({ showFormReview: false })}
      />;
    }
    return <CityForm
      onCitySubmit={() => this.setState({ showFormReview: true })}
    />;
  }
  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
};

export default reduxForm({
  form: 'newCityForm'
})(CityNew);
