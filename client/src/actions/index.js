import axios from 'axios';
import { FETCH_CITIES } from './types';

export const fetchStates = (state) => async dispatch => {
	const res = await axios.get(`/api/state`);
	dispatch({ type: FETCH_CITIES, payload: res.data });
};

export const fetchCities = (state) => async dispatch => {
	const res = await axios.get(`/api/${state}`);
	dispatch({ type: FETCH_CITIES, payload: res.data });
};

export const fetchCity = (city) => async dispatch => {
	const res = await axios.get(`/api/${city}`);
	dispatch({ type: FETCH_CITIES, payload: res.data });
};

export const fetchCityEdit = (city) => async dispatch => {
	const res = await axios.get(`/api/edit/${city}`);
	dispatch({ type: FETCH_CITIES, payload: res.data });
};

//City names only
export const submitNew = (values, history) => async dispatch => {
	console.log('----values', values);
	const res = await axios.post('/api/new', values);
	console.log('res----!!', res);
	history.push(`/admin/edit/${values.nameCity}`);
	dispatch({ type: FETCH_CITIES, payload: res.data });
};

//Data form only
export const uploadList = (values, history) => async dispatch => {
	console.log('----values', values);
	// var formData = new FormData();
    // formData.append("restaurants", values.restaurants);
	// const config = { headers: { 'Content-Type': 'multipart/form-data' } };
	const res = await axios.post(`/api/edit/${values.nameCity}`, values);
	console.log('res----!!', res);
	history.push('/admin/success');
	dispatch({ type: FETCH_CITIES, payload: res.data });
};
