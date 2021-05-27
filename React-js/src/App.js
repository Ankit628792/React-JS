import React from 'react';
import './App.css';
import Weather from './Weather'
import Search from './Search'
import Pokemon from './Pokemon';
import Todo from './Todo';
import KeepNote from './KeepNote';
import Counter from './Counter'
import { Switch, Route } from 'react-router-dom'
import Error from './Error'
import Home from './Home'


function App() {


  return (
    <div className="App">
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/todo" component={Todo} />
        <Route exact path="/pokemon" component={Pokemon} />
        <Route exact path="/keepnote" component={KeepNote} />
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/weather" component={Weather} />
        <Route component={Error} />
      </Switch>

    </div>
  );
}

export default App;
