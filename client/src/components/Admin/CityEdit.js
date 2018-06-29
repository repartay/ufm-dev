import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactFileReader from 'react-file-reader';
import Loading from '../Loading';
import Papa from 'papaparse';
import { fetchCityEdit, uploadList } from '../../actions';

class CityEdit extends Component {
  constructor(props) {
      super(props);
      this.state = {
        isFetching: true,
        restaurants: this.props.value || '',
        nameCity: this.props.match.params.cityId
      }
    }
  componentDidMount() {
    this.props.fetchCityEdit(this.props.match.params.cityId);
    setTimeout(() => this.setState({ isFetching: false }), 1500);
  }
  handleFiles = files => {
    let reader = new FileReader();
    reader.onload = (e) => {
      const csv = reader.result;
      console.log('csv', csv);
      const res = Papa.parse(csv, {
        header: true,
        skipEmptyLines: true
      });
      this.setState({
        restaurants: res.data
      });
      return;
    }
    reader.readAsText(files[0]);
  }
  renderForm() {
    const { city } = this.props;
    const thisCity = city[0];
    if (thisCity.namePretty) {
      return (
        <div>
          <h2>Upload New Data for:</h2>
          <div>
            <label>City Name Pretty</label>
            <div>{thisCity.namePretty}</div>
            <label>URI City Name</label>
            <div>{thisCity.nameCity}</div>
            <label>State</label>
            <div>{thisCity.nameState}</div>
            <label>SVG URI</label>
            <div>{thisCity.svgUri}</div>
          </div>
          <br />
          <label>Restaurants list (csv)</label>
          <ReactFileReader fileTypes={".csv"} handleFiles={this.handleFiles}>
            <button className='btn'>Upload</button>
          </ReactFileReader>
          <button
            onClick={() => this.props.uploadList(this.state, this.props.history)}
            className="green white-text btn-flat right"
          >
            Save City<i className="material-icons right">send</i>
          </button>
        </div>
      );
    }
    return null;
  }
  render() {
    const { isFetching } = this.state;
    return (
      <div>
        {isFetching ?
          <Loading /> :
          <div>
            {this.renderForm()}
          </div>
        }
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    city: state.city,
  };
}

export default connect(mapStateToProps, { fetchCityEdit, uploadList })(withRouter(CityEdit));
