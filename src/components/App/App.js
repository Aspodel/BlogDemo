import React from "react";
import "./App.scss";
import Page from "../Page/HomePage/HomePage";
import BlogDetail from "../Page/BlogDetail/BlogDetail";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Page} />
          <Route exact path="/blog" component={BlogDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
