import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectsTrybe from './pages/TrybeProjects';
import './Style/App.css';

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/project/Trybe" component={ ProjectsTrybe } />
        <Route exact path="/project/:project" component={ Projects } />
      </Switch>
    </main>
  );
}

export default App;
