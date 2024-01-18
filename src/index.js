import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import{
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import SignUp from './components/signup/signup';
import Signin from './components/signin/signin';


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<App />}> 
    <Route path='signup' element={<SignUp />} />
    <Route path='signin' element={<Signin />} />
  </Route>
  )
  
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
