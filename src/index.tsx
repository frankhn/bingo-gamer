import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GuessContextProvider } from './context/guess.context';
import { BoxesContextProvider } from './context/boxes.context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BoxesContextProvider>
      <GuessContextProvider>
        <App />
      </GuessContextProvider>
    </BoxesContextProvider>
  </React.StrictMode>
);
reportWebVitals();
