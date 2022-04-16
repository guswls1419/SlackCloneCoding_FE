import React from 'react';
import { Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserProfile from "./pages/UserProfile";
import { history } from "./redux/configstore";
import { ConnectedRouter } from "connected-react-router";
import './App.css';
import DirectMessage from './pages.js/DirectMessage';
import Header from './shared/Header';



function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/user/:id" exact component={UserProfile} />
          <Route path="/hd" exact component={Header} />
            <Route path="/dm" exact component={DirectMessage} />
  
      </ConnectedRouter>
    </React.Fragment>

  );
}

export default App;
