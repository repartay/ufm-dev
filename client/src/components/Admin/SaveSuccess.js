import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SaveSuccess extends Component {
	render() {
		console.log('this.props', this.props);
		return (
			<div>
				Your file has been saved successfully!
				<Link to="/">See Full City List</Link>
			</div>
		);
	}
};

export default SaveSuccess;