import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactFileReader from 'react-file-reader';
import Papa from 'papaparse';
import { fetchCityEdit, uploadList } from '../../actions';

class CityEdit extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      restaurants: this.props.value || '',
	      nameCity: this.props.match.params.cityId
	    }
	  }
	componentDidMount() {
		this.props.fetchCityEdit(this.props.match.params.cityId);
	}
	handleFiles = files => {
    	let reader = new FileReader();
    	reader.onload = (e) => {
    		const csv = reader.result;
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
	render() {
		console.log('this.props', this.props);
		console.log('this.state', this.state);
		const hasCityData = this.props.cities && this.props.cities.length > 0;
		if (!hasCityData) {
      return <div>Loading</div>
		}
		const city = this.props.cities;
		const thisCity = city[0];
		return (
			<div>
				<h2>Upload New Data for:</h2>
				<div>
					<label>City Name Pretty</label>
					<div>
						{thisCity.namePretty}
					</div>
					<label>URI City Name</label>
					<div>
						{thisCity.nameCity}
					</div>
					<label>State</label>
					<div>
						{thisCity.nameState}
					</div>
				</div>
				<ReactFileReader fileTypes={".csv"} handleFiles={this.handleFiles}>
  					<button className='btn'>Upload</button>
				</ReactFileReader>
				<button
	        		onClick={() => this.props.uploadList(this.state, this.props.history)}
					className="green white-text btn-flat right"
				>
	          		Save City
	          		<i className="material-icons right">send</i>
	        	</button>
			</div>
		);
	}
};

function mapStateToProps(state) {
	return { cities: state.cities };
}

export default connect(mapStateToProps, { fetchCityEdit, uploadList })(withRouter(CityEdit));
