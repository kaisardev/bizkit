import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import AuthPage from "./AuthPage/AuthPage";
import Main from "./Main/Main";
import FullCompany from "./FullCompany/FullCompany";

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/" exact component={AuthPage} />
          <Route path="/main" exact component={Main} />
          <Route path="/companies/:id" exact component={FullCompany} />
        </Switch>
      </>
    );
  }
}

export default App;
