import axios from 'axios';
import { FETCH_CITIES, FETCH_CITY } from './types';

// Fetches ALL cities, no sort by state
export const fetchStates = (state) => async dispatch => {
	const res = await axios.get(`/api/state`);
	dispatch({ type: FETCH_CITIES, payload: res.data });
};
// Fetches ONE city
export const fetchCity = (city) => async dispatch => {
	const res = await axios.get(`/api/city/${city}`);
	dispatch({ type: FETCH_CITY, payload: res.data });
};

// Keep as admin only
export const fetchCityEdit = (city) => async dispatch => {
	const res = await axios.get(`/api/edit/${city}`);
	dispatch({ type: FETCH_CITIES, payload: res.data });
};
export const submitNew = (values, history) => async dispatch => {
	const res = await axios.post('/api/new', values);
	history.push(`/admin/edit/${values.nameCity}`);
	dispatch({ type: FETCH_CITIES, payload: res.data });
};
export const uploadList = (values, history) => async dispatch => {
	// var formData = new FormData();
    // formData.append("restaurants", values.restaurants);
	// const config = { headers: { 'Content-Type': 'multipart/form-data' } };
	const res = await axios.post(`/api/edit/${values.nameCity}`, values);
	history.push('/admin/success');
	dispatch({ type: FETCH_CITIES, payload: res.data });
};
