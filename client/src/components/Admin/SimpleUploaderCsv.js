import React from 'react';
// import Dropzone from 'react-dropzone';
// import csv from 'csv';

export default class SimpleUploaderCsv extends React.Component {
	render() {
		return (
			<form action="/" method="POST" encType="multipart/form-data">
				<input type="file" name="file" accept="*.csv" /><br/><br/>
 				<input type="submit" value="Upload City" />
			</form>
		);
	}
}
