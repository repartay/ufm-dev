import axios from 'axios';
import { FETCH_CITIES } from './types';

export const fetchCities = (state) => async dispatch => {
	const res = await axios.get(`/api/${state}`);
	dispatch({ type: FETCH_CITIES, payload: res.data });
};