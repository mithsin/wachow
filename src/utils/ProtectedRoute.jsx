import React from 'react';
import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { isSignIn } from './States/userSlice';
import { withAuthenticator, useAuthenticator } from "@aws-amplify/ui-react";

const ProtectedRoute = ({
  redirectPath = '/login',
  children,
}) => {
  const { authStatus, user } = useAuthenticator((context) => [context.user]);

  console.log('ProtectedRoute-user--->: ', user)
  // const userSignIn = useSelector(isSignIn);
  // const userSignIn = true;
  // console.log('ProtectedRoute-userSignIn->: ', userSignIn)

  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;