import React from 'react';
import logo from './logo.svg';
import Question from "./pages/question"
import ScoreBoard from "./pages/scoreboard"
import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Question}/>
            <Route exact path="/scoreboard" component={ScoreBoard}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
