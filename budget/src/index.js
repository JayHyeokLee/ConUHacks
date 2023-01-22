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
import Setting from './pages/Settings.js';
import Settings from './pages/Settings.js';


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
    path: "/settings",
    element: <Settings/>,
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
