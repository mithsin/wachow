import { useEffect } from "react";
import { API, graphqlOperation } from 'aws-amplify';
import { Authenticator, useAuthenticator, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from 'react-router';
import { createUser as createUserMutation } from 'graphql/mutations'
import { getUser } from 'graphql/queries'
import { setLoginUserInfo, userInfo } from "slices/userSlice";

export const Login = () => {
  const { authStatus, user } = useAuthenticator((context) => [context.user]);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || '/';

  // console.log('Login-authStatus, user---.: ', authStatus, user)

  useEffect(() => {
    if (authStatus === 'authenticated') {
      userLogger(user)
      navigate(from, { replace: true });
    }
  }, [authStatus, navigate, from]);

  const userLogger = async(userData) => {
    // console.log('userLogger-userData-->: ', userData)
    try {
      const apiUserData = await API.graphql({
        query: getUser,
        variables: { id: userData.username }
      });
      // console.log('userLogger-apiUserData-->: ', apiUserData)
        if(!apiUserData.data.getUser){
          const data = {
            id: userData.attributes.sub,
            email: userData.attributes.email
          }
          // console.log('!userLogger-data-->: ', data)
          await API.graphql(graphqlOperation(createUserMutation, {input: data}))
          .then(res => {
            console.log('createUserMutation-re--->: ', res)
    
          })
          .catch(err => console.log('createUserMutation-err--->: ', err))
       }
       dispatch(setLoginUserInfo(apiUserData.data.getUser))
    } catch(error){
      console.log('userLogger-error-->: ', error)
    } 
  }

  return (
    <View className="auth-wrapper">
      <Authenticator></Authenticator>
    </View>
  );
}

export default Login