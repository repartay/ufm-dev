import React from 'react';
import csv from 'csv';

// const oldAdaptFileEventToValue = delegate =>
// e => delegate(e.target.files[0])

const adaptFileEventToValue = delegate =>
  e => delegate(e.target.files[0])

const handleOnDrop = (e) => {
    console.log('e', e);
      // let {input: {onChange, onBlur}} = this.props;
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
          return this.props.input = result;
        });
      };
    // onChange(e);
    // onBlur(e); // update touched
    reader.readAsBinaryString(e[0]);
  }

const FileInputSimple = ({
  input: {
    value: omitValue,
    onChange,
    onBlur,
    ...inputProps,
  },
  meta: omitMeta,
  ...props,
}) => {
  return (
    <input
    onChange={adaptFileEventToValue(onChange)}
    onBlur={adaptFileEventToValue(onBlur)}
    type="file"
    {...inputProps}
    {...props}
  />
  )
}
  
export default FileInputSimple;