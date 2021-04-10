import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRouteService = ( { component: Component, ...rest } ) => (
    <Route { ...rest } render={ props => 
        localStorage.getItem('token') !== null ?
            (
                <Component { ...props } />
            )
                :
            (
                <Redirect to={ { pathname: "/login", state: { from: props.location } } } />
            )
        }
    />
);

export default PrivateRouteService