import "./App.css";
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home/home";
import AddPigeon from "./components/AddPigeon/addPigeon";
import Login from "./components/Login/login";
import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return (
        <Login/>
    );
  }
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path="/login" element={ <Login/> } />
      <Route path="/add-pigeon" element={ <AddPigeon/> } />
    </Routes>
  </div>
  );
}

export default App;
