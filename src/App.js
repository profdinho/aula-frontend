import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import MainComponent from './components/MainComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListContatosComponent from './components/ListContatosComponent';
import CreateContatoComponent from './components/CreateContatoComponent';
import PrivateRoute from './services/PrivateRouteService';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={LoginComponent}></Route>
            <Route path="/login" exact component={LoginComponent}></Route>
            <PrivateRoute path="/main" component={MainComponent}></PrivateRoute>
            <PrivateRoute path="/contatos" component={ListContatosComponent}></PrivateRoute>
            <PrivateRoute path="/add-contato/:id" component={CreateContatoComponent}></PrivateRoute>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
