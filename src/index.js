import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SharedStyles from "./styles/sharedstyles";
import {CountryProvider} from "./context/countryContext";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <CountryProvider>


      <SharedStyles/>
    <App />
      </CountryProvider>
  </React.StrictMode>
);

