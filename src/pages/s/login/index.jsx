'use client'

import { useEffect } from "react";
import { withAuthenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import { createUser as createUserMutation } from 'graphql/mutations'
import { getUser } from 'graphql/queries'

export const Login = () => {
  const { authStatus, user } = useAuthenticator((context) => [context.user]);

  console.log('Login-authStatus-->: ', authStatus)
  console.log('Login-user-->: ', user)

  useEffect(() => {
    if (authStatus && authStatus === "authenticated") {
      userLogger(user)
      // router.back()
    }
  });

  const userLogger = async(userData) => {
    console.log('userLogger-userData-->: ', userData)
    try {
      const apiUserData = await API.graphql({
        query: getUser,
        variables: { id: userData.username }
      });
      console.log('userLogger-apiUserData-->: ', apiUserData)
        if(!apiUserData.data.getUser){
          const data = {
            id: userData.attributes.sub,
            email: userData.attributes.email
          }
          console.log('!userLogger-data-->: ', data)
          await API.graphql(graphqlOperation(createUserMutation, {input: data}))
          .then(res => {
            console.log('createUserMutation-re--->: ', res)
    
          })
          .catch(err => console.log('createUserMutation-err--->: ', err))
       }
        
    } catch(error){
      console.log('userLogger-error-->: ', error)
    } 

    console.log('trigger setUserInfo dispatch')

  }

  return <></>;
}



export default withAuthenticator(Login, {
  socialProviders: ['google']
});



// {
//   "id": "c215dccf-d1d3-491d-bc2c-d653f4a8c55d",
//   "email": "paf1100@gmail.com"
// }