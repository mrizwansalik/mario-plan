import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
// import 'App.css'
import Dashboard from "./component/dashboard/Dashboard";
import Detail from "./component/projects/Detail";
import Signin from "./component/auth/Signin";
import Signup from "./component/auth/Signup";
import Create from "./component/projects/Create";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={Detail} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/create" component={Create} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
