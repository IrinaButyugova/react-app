import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Login from "./Login"
import Main from "./Main";
import About from "./About";
import ThemedButton from "./ThemedButton";
import { StateProvider } from './state';

export default function App () {
  const initialState = {
    theme: { primary: 'green' }
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'changeTheme':
        return {
          ...state,
          theme: action.newTheme
        };        
      default:
        return state;
    }
  };  
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
        <ThemedButton/>
        <BrowserRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/">Main</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
          <div className="content">
          <Routes>
            <Route exact path="/" element={<Main/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
          </div>
        </div>
      </BrowserRouter>
    </StateProvider>
  );
}
