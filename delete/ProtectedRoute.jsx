import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { isSignIn } from './States/userSlice';
import { withAuthenticator, useAuthenticator } from "@aws-amplify/ui-react";

const ProtectedRoute = ({
  redirectPath = '/login',
  children,
}) => {
  const { route } = useAuthenticator((context) => [context.route]);
  let location = useLocation();
  console.log('ProtectedRoute-route--->: ', route)
  console.log('ProtectedRoute-location--->: ', location)
  if (route !== 'authenticated') {
    console.log('!user trigger')
    return <Navigate to={ redirectPath} replace />;
  }

  return children;
};
export default ProtectedRoute;