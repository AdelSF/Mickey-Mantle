import React from "react";
import Test from "./Test"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/test"><Test /></Route>
        </Switch>
    </Router>
  );
}