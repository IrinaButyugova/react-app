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
import { connect } from 'react-redux';
import { getDataRequest, getPostsRequest,
  createPostRequest } from './actions/data'; 
import UserForm from './UserForm';
import StepForm from './stepForm/StepForm'

// export default function App () {
//   const initialState = {
//     theme: { primary: 'green' }
//   };

//   const reducer = (state, action) => {
//     switch (action.type) {
//       case 'changeTheme':
//         return {
//           ...state,
//           theme: action.newTheme
//         };        
//       default:
//         return state;
//     }
//   };  
//   return (
//     <StateProvider initialState={initialState} reducer={reducer}>
//         <ThemedButton/>
//         <BrowserRouter>
//         <div>
//           <h1>Simple SPA</h1>
//           <ul className="header">
//             <li><NavLink to="/">Main</NavLink></li>
//             <li><NavLink to="/login">Login</NavLink></li>
//             <li><NavLink to="/about">About</NavLink></li>
//           </ul>
//           <div className="content">
//           <Routes>
//             <Route exact path="/" element={<Main/>}/>
//             <Route path="/login" element={<Login/>}/>
//             <Route path="/about" element={<About/>}/>
//           </Routes>
//           </div>
//         </div>
//       </BrowserRouter>
//     </StateProvider>
//   );
// }

class App extends Component {
  componentDidMount() {
    this.props.getDataRequest();
    this.props.getPostsRequest();
  }

  render() {
    return(
      <div>
        <h1>
          {this.props.data}
          {this.props.posts?.data.map((e,i) => {
            return(
              <div key={i}>{e.msg}</div>
            )
          })}
        </h1>
        <button onClick={() => this.props.createPostRequest({"post": "Random Num Post - "})}>
CLick to Add Post
        </button>

        <UserForm name="" age="0" />
        <StepForm />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("App State ->", state);
  return {
    data: state.data.test,
    posts: state.data.posts
  }
}

export default connect(mapStateToProps, { getDataRequest,
  getPostsRequest, createPostRequest })(App)
