import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {AppContextProvider} from './contexts/AppContext'
import App from './components/App/App';
import './index.css';

ReactDOM.render(
<Router>
  <AppContextProvider>
    <App />
  </AppContextProvider>
</Router>, 
document.getElementById('root'));
