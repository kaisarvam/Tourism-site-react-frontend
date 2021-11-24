import React from "react";
import { Redirect, Route } from "react-router";
import useAllContext from '../../Hooks/useAllContext'

const PrivateRoute = ({ children, ...rest }) => {
 const data = useAllContext();
  const { user ,isLoading } = data[0];
  if(isLoading){
    return(
      <div class="spinner-border text-white" role="status">
  <span class="sr-only">Loading...</span>
</div>
    )
  }
  
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return user.email? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          ></Redirect>
        );
      }}
    ></Route>
  );
};

export default PrivateRoute;
