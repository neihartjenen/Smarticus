import React from 'react';
import Question from "./components/Question"
import ScoreBoard from "./pages/scoreboard"

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
