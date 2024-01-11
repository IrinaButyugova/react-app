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

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
