// App.js

import React, { createContext, useReducer } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Logout from "./components/Logout";

import {initialState, reducer} from "../src/reducer/UseReducer";

export const UserContext = createContext();

const Routing = () => {
  return(
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/logout" element={<Logout />} />
  </Routes>
  )
}

const App = () => {
  
  const [state, dispatch] = useReducer(reducer, initialState)

  return (

   

    <Router>
      <>
        <UserContext.Provider value={{state,dispatch}}>
          <Navbar />
          <Routing />
        </UserContext.Provider>
      </>
    </Router>
  );
};

export default App;
