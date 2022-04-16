import './App.css';
import { ConnectedRouter } from 'connected-react-router';
//import {BrowserRouter, Route} from "react-router-dom";
import { history } from './redux/configstore';
import React from 'react';
import { Route } from 'react-router-dom';
import DirectMessage from './pages.js/DirectMessage';
import Header from './shared/Header';
import MenuList from './components/MenuList';


function App() {
  
  return (
    <React.Fragment>
      <Route></Route>
        <Header/>
        <DirectMessage/>      
      </React.Fragment>
  );
}

export default App;
