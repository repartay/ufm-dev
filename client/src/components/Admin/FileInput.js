import React from 'react';
import Dropzone from 'react-dropzone';
// import csv from 'csv';

export default class FileInput extends React.Component {

  handleDropOrClick = (acceptedFiles, rejectedFiles, e) => {
    let eventOrValue = e;
    let {input: {onChange, onBlur}} = this.props;
    if (e.type === 'drop') {
      if (acceptedFiles.length) {
        console.log('acceptedFiles', acceptedFiles);
        // FileList or [File]
        eventOrValue = (e.dataTransfer && e.dataTransfer.files) || acceptedFiles;
      } else {
        eventOrValue = null;
      }
    }
    onBlur(eventOrValue); // update touched
    onChange(eventOrValue); // update value
  }


  render() {
    let {input} = this.props;
    let {accept, multiple} = this.props;
    let selectedFile = (input && input.value && input.value[0]) || null;
    let dropzoneProps = {
      accept,
      multiple,
      onDrop: this.handleDropOrClick
    };
    return (
      <div>
        <input type='hidden' disabled {...input} />
        {selectedFile? <span>{selectedFile.name}</span> : null}
        <Dropzone {...dropzoneProps} />  
      </div>
      );
  }
}