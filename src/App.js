import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./components/Details/Details";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/productdetails" component={Details}></Route>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
