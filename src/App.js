import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./components/Index";
import IndRecipie from "./components/IndRecipie";
import SimilarRecipie from "./components/SimilarRecipie";
import SearchResult from "./components/SearchResult";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Index} exact></Route>
          <Route path="/information/:id" component={IndRecipie} exact></Route>
          <Route path="/search/:query" component={SearchResult} exact></Route>
          <Route
            path="/similar/:query"
            component={SimilarRecipie}
            exact
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
