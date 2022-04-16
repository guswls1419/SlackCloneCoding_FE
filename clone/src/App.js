import React from "react";
import { Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserProfile from "./pages/UserProfile";
import { history } from "./redux/configstore";
import { ConnectedRouter } from "connected-react-router";

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/user/:id" exact component={UserProfile} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
