import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './Components/navBar/Navbar';
import Footer from './Components/footer/Footer';
import ResultPage from './Pages/ResultPage';
import HomePage from './Pages/HomePage';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/search">
            <ResultPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
