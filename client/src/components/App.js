import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AdminDash from './Admin/AdminDash';
import UserDash from './UserDash';
import PlacesList from './PlacesList';

const App = () =>
  <div className="container">
    <BrowserRouter>
      <div>
        <Route path="/" exact component={UserDash} />
        <Route path="/admin" component={AdminDash} />
        <Route path="/:cityId" component={PlacesList} />
        <Route path="/ufm-redirect" component={
          () => window.location = 'http://userfriendlymaps.com'
        } />
      </div>
    </BrowserRouter>
  </div>;

export default App;

