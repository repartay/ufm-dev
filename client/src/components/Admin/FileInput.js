import React from 'react';
import Dropzone from 'react-dropzone';
import csv from 'csv';

export default class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || []
    //  formVal: props.input.value || []
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
    this.setState({value: nextProps.value}); // update state when props change
  }
  handleDropOrClick = (acceptedFiles, rejectedFiles, e) => {
    let eventOrValue = e;
    let {input: {onChange, onBlur}} = this.props;
    if (e.type === 'drop') {
      if (acceptedFiles.length) {
        console.log('acceptedFiles', acceptedFiles);
        // FileList or [File]
        console.log('e.dataTransfer', e.dataTransfer);
        eventOrValue = (e.dataTransfer && e.dataTransfer.files) || acceptedFiles;
      } else {
        eventOrValue = null;
      }
    }
    onBlur(eventOrValue); // update touched
    onChange(eventOrValue); // update value
  }
  updateValue(value) {
    console.log('value', value)
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
          }
          this.setState({
            formVal: result
          });
          this.props.onChange(result);
          // return; 
        });
      };
    reader.readAsBinaryString(value[0]);
    console.log('value', value)
    // this.setState({formVal: value});
    // this.props.onChange(value);
  }
  handleOnDrop = (e) => {
    console.log('e.files', e.files);
      let {input: {onChange, onBlur}} = this.props;
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
          }
          this.setState({
            formVal: result
          });
          
          return; 
        });
      };
    onChange(e);
    // onBlur(e); // update touched
    reader.readAsBinaryString(e[0]);
  }
  render() {
    console.log('this.props', this.props);
    let {input} = this.props;
    // input.value = this.state.formVal;
    input.value = this.state.value;
    // const {value} = this.state.value;
    let {accept, multiple} = this.props;
    let selectedFile = (input && input.value && input.value[0]) || null;
    let dropzoneProps = {
      accept,
      multiple,
      // onDrop: this.handleOnDrop,
      onDrop: this.handleOnDrop
    };
    // console.log('this.props---', this.props);
    return (
      <div>
        <input type='hidden' disabled {...input} />
        {selectedFile? <span>File uploaded!</span> :  <Dropzone {...dropzoneProps} /> }
      </div>
      );
  }
}