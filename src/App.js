import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import HomeAlt from './pages/HomeAlt';
import About from './pages/About'
import Events from './pages/Events';
import Achievements from './pages/Achievements';
import Project from './pages/Project';

const App = () => {
  return (
    <Router>
      <div className="App">
      <Nav />
        <Switch>
          <Route exact path='/' component={HomeAlt} />
          <Route exact path='/about' component={About} />
          <Route exact path='/events' component={Events} />
          <Route exact path='/projects' component={Project} />
          <Route exact path='/achievements' component={Achievements} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
