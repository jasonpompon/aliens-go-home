import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Canvas from './components/Canvas';
import ProjectsLanding from './components/ProjectsLanding';
import Navigation from './components/Navigation';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={ProjectsLanding} />
            <Route path="/game" component={Canvas} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;