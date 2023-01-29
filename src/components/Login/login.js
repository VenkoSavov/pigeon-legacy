import React from "react";
import firebase from "firebase/compat/app";
import "firebase/auth";
import { FirebaseAuth } from "react-firebaseui";

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
};

function Login() {
  return (
    <div>
      <center>
        <h1>Please Login</h1>
      </center>
      <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default Login;
