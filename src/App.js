import React from 'react';
import Home from './components/home/Home';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
