// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { CognitoIdentityProviderClient, } from "@aws-sdk/client-cognito-identity-provider";
import config from "./config.json";
import axios from "axios";

export const cognitoClient = new CognitoIdentityProviderClient({
  region: config.region,
});

// adminUserGlobalSignOut

export const signIn = async (email: string, password: string) => {
  const params = {
    triggerSource: "SignIn",
    email: email,
    password: password
  };
  try {
    const res = await axios.post('https://qg8euoyjgl.execute-api.us-east-1.amazonaws.com/dev/user', params, {
      headers: {
          'Content-Type': 'application/json'
      }
    })
    return res.data
  } catch (error) {
    console.error("Error signing up: ", error);
    throw error;
  }
};

export const signUp = async (email: string, password: string) => {
  const params = {
    triggerSource: "SignUp",
    email: email,
    password: password
  };

  try {
    axios.post('https://qg8euoyjgl.execute-api.us-east-1.amazonaws.com/prod/user', params)
      .then(res => {
        return res.data
      })
  } catch (error) {
    console.error("Error signing up: ", error);
    throw error;
  }
};

export const confirmSignUp = async (email: string, code: string) => {
  const params = {
    triggerSource: "ConfirmSignUp",
    email: email,
    confirmationCode: code
  };

  try {
    axios.post('https://qg8euoyjgl.execute-api.us-east-1.amazonaws.com/prod/user', params)
      .then(res => {
        return res.data
      })
  } catch (error) {
    console.error("Error confirming sign up: ", error);
    throw error;
  }
};

export const signOut = async (AccessToken: string) => {
  const params = {
    triggerSource: "signOut",
    AccessToken: AccessToken
  };

  try {
    axios.post('https://qg8euoyjgl.execute-api.us-east-1.amazonaws.com/prod/user', params)
      .then(res => {
        return res.data
      })
  } catch (error) {
    console.error("Error confirming sign out: ", error);
    throw error;
  }
};

// export const signOut = async() => {}