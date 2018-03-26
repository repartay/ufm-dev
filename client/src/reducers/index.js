import { combineReducers } from 'redux';
import { reducer as ReduxForm } from 'redux-form';
import citiesReducer from './citiesReducer';
import cityReducer from './cityReducer';

export default combineReducers({
	form: ReduxForm,
	city: cityReducer,
	cities: citiesReducer
});