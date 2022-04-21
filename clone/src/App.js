import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserProfile from "./pages/UserProfile";
import { history } from "./redux/configstore";
import { ConnectedRouter } from "connected-react-router";
import "./App.css";
import DirectMessage from "./pages/DirectMessage";
import ChatDetaill from "./pages/ChatDetaill";

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/user/:id" exact component={UserProfile} />
        <Route path="/dm" exact component={DirectMessage} />
        <Route path="/chat" exact component={ChatDetaill} />
        <Route path="/chat/:id" exact component={ChatDetaill} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
