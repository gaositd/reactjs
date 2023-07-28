import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,  
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <createBrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  //   </createBrowserRouter>
  // </React.StrictMode>,
)
/*
https://redux.js.org/tutorials/quick-start
ya esta funcionando el redux toolkit
*/