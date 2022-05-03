import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GuessContextProvider } from './context/guess.context';
import { BoxesContextProvider } from './context/boxes.context';
import { PossibleBingoContextProvider } from './context/possibleBingo.context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PossibleBingoContextProvider>
      <BoxesContextProvider>
        <GuessContextProvider>
          <App />
        </GuessContextProvider>
      </BoxesContextProvider>
    </PossibleBingoContextProvider>
  </React.StrictMode>
);
reportWebVitals();
