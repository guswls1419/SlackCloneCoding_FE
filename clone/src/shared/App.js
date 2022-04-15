import './App.css';
import { ConnectedRouter } from 'connected-react-router';
//import {BrowserRouter, Route} from "react-router-dom";
import { history } from '../redux/configstore';
import React from 'react';


function App() {
  
  return (
      <ConnectedRouter history={history}>
      
      </ConnectedRouter>
  );
}

export default App;
