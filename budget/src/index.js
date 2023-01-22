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
import Registration from './pages/Registration.js';
import { GlobalStyle } from './reset.css';
import Suggestions from './pages/Suggestions';


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
  {
    path: "/suggestions",
    element: <Suggestions/>,
  },
  {
    path: "/registration",
    element: <Registration/>,
  }
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
