import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AdminList from './AdminList';
import CityEdit from './CityEdit';
import CityNew from './CityNew';

const AdminDash = () => {
	return (
		<Switch>
			<Route exact path="/admin" component={AdminList} />
			<Route exact path="/admin/new" component={CityNew} />
			<Route exact path="/admin/:cityId" component={CityEdit} />
		</Switch>
	);
};

export default AdminDash;
