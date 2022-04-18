import React from 'react';
import { Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserProfile from "./pages/UserProfile";
import { history } from "./redux/configstore";
import { ConnectedRouter } from "connected-react-router";
import './App.css';
import DirectMessage from './pages/DirectMessage';
import ChatDetaill from './pages/ChatDetaill';
//import test from './test';
import Iinvitation from './chating/Iinvitation';



function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/user/:id" exact component={UserProfile} />
          <Route path="/dm" exact component={DirectMessage} />
          <Route path="/chat/:roomid" exact component={ChatDetaill} />
          {/* <Route path="/test" exact component={test} /> */}
          <Route path="/Iinvitation" exact component={Iinvitation} />
      </ConnectedRouter>
    </React.Fragment>

  );
}

export default App;