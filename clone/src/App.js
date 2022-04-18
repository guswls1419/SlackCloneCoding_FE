import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserProfile from "./pages/UserProfile";
import { history } from "./redux/configstore";
import { ConnectedRouter } from "connected-react-router";
import "./App.css";
import DirectMessage from "./pages/DirectMessage";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userAction } from "./redux/modules/user";

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/user/:id" exact component={UserProfile} />
        <Route path="/dm" exact component={DirectMessage} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
