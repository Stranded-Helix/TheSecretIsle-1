import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Story from './components/Story';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Quiz from './pages/Quiz';
import Timer from './components/Timer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Route exact path="/Story" component={Story} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Quiz" component={Quiz} />
          <Route exact path="/Timer" component={Timer} />
      </div>
    </Router>
  );
}

export default App;
