import React from 'react';
import Dropzone from 'react-dropzone';
import csv from 'csv';

const onDrop = onDrop = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
        csv.parse(reader.result, (err, data) => {
            console.log(data);
        });
    };

    reader.readAsBinaryString(e[0]);
}

export const fileUploader = ({ field }) => {
  return (
    <Dropzone
    name={field.name}
    onDrop={onDrop}
	/>
  )
}