/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Soft UI Dashboard React Context Provider

import { SoftUIControllerProvider } from "context";

import AuthContextProvider from "./context-stores/authcontext";

import AppContext  from './contextData/context'

ReactDOM.render(
  <BrowserRouter>
    <SoftUIControllerProvider>
    <AuthContextProvider>
      <AppContext>
      <App />
      </AppContext>
    </AuthContextProvider>
    </SoftUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
