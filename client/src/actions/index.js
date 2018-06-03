import axios from 'axios';
import { FETCH_CITIES, FETCH_CITY } from './types';

// USER DASH, formerly 'fetchStates'
export const fetchAllCitiesReadOnly = (state) => async dispatch => {
  const res = await axios.get(`/api/readonlycitylist`);
  dispatch({ type: FETCH_CITIES, payload: res.data });
};
// USER DASH, formerly 'fetchCity'
export const fetchCityReadOnly = (city) => async dispatch => {
	const res = await axios.get(`/api/readonlycity/${city}`);
	dispatch({ type: FETCH_CITY, payload: res.data });
};

// ADMIN DASH
export const fetchAllCitiesAdmin = (state) => async dispatch => {
	const res = await axios.get(`/api/admincitylist`);
	dispatch({ type: FETCH_CITIES, payload: res.data });
};
// ADMIN EDIT, formerly 'api/edit/{city}'
export const fetchCityEdit = (city) => async dispatch => {
	const res = await axios.get(`/api/adminedit/${city}`);
	dispatch({ type: FETCH_CITY, payload: res.data });
};
// ADMIN UPLOAD
export const uploadList = (values, history) => async dispatch => {
  const res = await axios.post(`/api/upload/${values.nameCity}`, values);
  history.push('/admin/success');
  dispatch({ type: FETCH_CITIES, payload: res.data });
};
// ADMIN NEW CITY
export const submitNew = (values, history) => async dispatch => {
	const res = await axios.post('/api/new', values);
  history.push(`/admin/edit/${values.nameCity}`);
	dispatch({ type: FETCH_CITIES, payload: res.data });
};
