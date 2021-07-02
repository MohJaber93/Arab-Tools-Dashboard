import React from 'react';
import {Redirect,Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
const PrivateRoute = ({component: Component, ...rest}) => {
    const {token}=useSelector((state)=>state.user)
    return (

        <Route {...rest} render={props => (
            token.length>0 ?
                <Component {...props} />
            : <Redirect to="/dashboard/signin" />
        )} />
    );
};

export default PrivateRoute;