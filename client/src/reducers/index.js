import { combineReducers } from 'redux';
import { reducer as ReduxForm } from 'redux-form';
import citiesReducer from './citiesReducer';

export default combineReducers({
	form: ReduxForm,
	cities: citiesReducer
});