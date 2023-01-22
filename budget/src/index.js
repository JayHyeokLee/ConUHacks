import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage.js';
import LogIn from './pages/LogIn.js';
import SignUp from './pages/SignUp.js';
import { GlobalStyle } from './reset.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/login",
    element: <LogIn/>,
  },
]);

ReactDOM.render(
  <RouterProvider router={router}/>
  , document.getElementById('root')
);

// ReactDOM.render(
//   <Router>
//     <GlobalStyle />
//     <App />
//   </Router>,
//   document.getElementById('root')
// );
