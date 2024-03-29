import React, { useEffect, useState  } from "react";
import {
  Route,
  NavLink,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Login from "./components/Login/Login"
import Main from "./components/Main/Main";
import About from "./components/About/About";
import ThemedButton from "./components/ThemedButton/ThemedButton";
import { StateProvider } from './state';
import { connect, useSelector, useDispatch } from 'react-redux';
import { getDataRequest, getPostsRequest,
  createPostRequest } from './actions/data'; 
import UserForm from './components/UserForm/UserForm';
import StepForm from './stepForm/StepForm'
import ItemsList from "./SearchForm/ItemsList";
import FormikForm from "./formikForm/formikForm";
import { ErrorBoundary} from 'react-error-boundary'
import SimulateErrorButton from './components/SimulateError/SimulateErrorButton'

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

const propsValues = {
  title: "Smartphone list",
  items: [
          "Samsung Galaxy Note20", 
          "Apple iPhone 12 Pro", 
          "Google Pixel 5", 
          "Huawei P40 Pro", 
          "OnePlus 8 Pro", 
          "Asus Zenfone 7 Pro"
  ]
};

function App() {

  const data = useSelector((state) => state.data)
  const posts = useSelector((state) => state.posts)

  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    dispatch(getDataRequest());
    dispatch(getPostsRequest());
  }, []);

  const ErrorMsg = (error) => {
    return (
        <div>
            <p>Something went wrong!!!</p>
            <p>{error.error.message}</p>
            <button onClick={handleResetError}>Try again</button>
        </div>
    );
};

const logError = (error) => {
  setErrorMessage(error.message);
  console.log("logError:" + error.message);
};


const handleResetError = () => {
  setErrorMessage("");
  console.log("Error boundary reset");
};
  
    return(
      <div>
        <ErrorBoundary onError={logError} FallbackComponent={ErrorMsg} key={errorMessage}>

        <h1>
          {data.test}
          {posts?.data.map((e,i) => {
            return(
              <div key={i}>{e.msg}</div>
            )
          })}
        </h1>
        <button onClick={() => dispatch(createPostRequest({"post": "Random Num Post - "}))}>
          CLick to Add Post
        </button>
        
        <SimulateErrorButton/>
        <UserForm name="" age="0" />
        </ErrorBoundary>
        <StepForm />
        <ItemsList data={propsValues} />
        <FormikForm />
      </div>
    )
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
