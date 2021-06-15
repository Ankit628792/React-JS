import './App.css';
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Signout from './components/Signout'
import { createContext, useReducer } from 'react';
import { initialState, reducer } from './reducer';


export const UserContext = createContext();

const Routing = () => {
  return (
    <Switch>
    <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

        <Route exact path="/signin">
          <Signin />
        </Route>

        <Route exact path="/signup">
          <Signup />
        </Route>

        <Route exact path="/signout">
          <Signout />
        </Route>
      </Switch>
  )
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <UserContext.Provider value={{state, dispatch}}>
        {/* <Table /> */}
        <Navbar />

        <Routing />

      </UserContext.Provider>
    </>
  );
}

export default App;
