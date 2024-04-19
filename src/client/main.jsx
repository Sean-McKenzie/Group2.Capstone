import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import store from "./features/store";
//add store to provider on line 12
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Provider >  */}
        <App />
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>
);
