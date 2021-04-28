import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import IndRecipie from "./components/IndRecipie";
import SearchResult from "./components/SearchResult";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Header} exact></Route>
          <Route path="/individual" component={IndRecipie} exact></Route>
          <Route path="/search/:query" component={SearchResult} exact></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
