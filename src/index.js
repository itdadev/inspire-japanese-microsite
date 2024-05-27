import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";


import App from './App';
import GlobalStyles from "@/assets/styles/GlobalStyles";
import {QueryProvider} from "@/lib/react-query/QueryProvider";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* NOTE: react query setting */}
      <QueryProvider>
        {/* NOTE: Globally resetting CSS styles*/}
        <GlobalStyles />

        <ReactQueryDevtools />

        <App/>
      </QueryProvider>
    </BrowserRouter>
  </React.StrictMode>
);

