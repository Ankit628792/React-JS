import './App.css';
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Signin from './components/Signin'
import Signup from './components/Signup'
// import Table from './Table'
function App() {
  return (
    <>
      {/* <Table /> */}
      <Navbar />

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

    </>
  );
}

export default App;
