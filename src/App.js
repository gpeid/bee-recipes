import React from 'react';
import styles from './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import RecipeContainer from './containers/RecipeContainer';
import Card from './components/Card/Card';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HashRouter, Route, Switch } from "react-router-dom";

import Recipe from './pages/recipe/recipe';

const App = () => {
  return (
    <HashRouter basename="/">
      <div className={styles.App}>
        <Header />
        <Route exact path="/" component={RecipeContainer} />
        <Route path="/random" component={Card} />
        <Switch>
          <Route path="/recipe/:id" render={(props) => <Recipe {...props} />} />
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;