import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import csv from 'csv';
import { fetchCityEdit, uploadList } from '../../actions';
// import FileInputSimple from './FileInputSimple';

class CityEdit extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      restaurants: this.props.value || '',
	      nameCity: this.props.match.params.cityId
	    //  formVal: props.input.value || []
	    }
	  }
	componentDidMount() {
		this.props.fetchCityEdit(this.props.match.params.cityId);
	}
	handleOnDrop = (e) => {
    console.log('e.target', e.target.files);
      const reader = new FileReader();
      reader.onload = () => {
        csv.parse(reader.result, (err, data) => {
          console.log(data);
          let headers=data[0];
          headers.pop();
          let result = [];
          headers = headers.map(function(h) {
            return h.trim();
          });
          for(var i=1;i<data.length;i++){
            var obj = {};
            var currentline=data[i];

            for(var j=0;j<headers.length;j++){
              obj[headers[j]] = currentline[j].trim();
            }
    
            result.push(obj);
            console.log('result', result);
          }
          this.setState({
            restaurants: result
          });
          return; 
        });
      };
    // onBlur(e); // update touched
    reader.readAsBinaryString(e.target.files[0]);
  }
	render() {
		console.log('this.props', this.props);
		console.log('this.state', this.state);
		const hasCityData = this.props.cities && this.props.cities.length > 0;
		if (!hasCityData) {
			<div>Loading</div>
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
				<input type="file" onChange={event => this.handleOnDrop(event)} accepts="*.csv" />
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
