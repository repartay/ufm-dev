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

export const submitNew = (values, history) => async dispatch => {
	console.log('values', values);
	const config = { headers: { 'Content-Type': 'multipart/form-data' } };
	const res = await axios.post('/api/new', values, config);
	history.push('/');
	dispatch({ type: FETCH_CITIES, payload: res.data });
};