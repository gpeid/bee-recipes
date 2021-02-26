import React, { Component } from "react";
import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RecipeContainer from "./containers/RecipeContainer";
import Recipe from "./components/Recipe/Recipe";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.App}>
          <Header />
          <Route exact path="/" component={RecipeContainer} />
          <Route exact path="/random" component={Recipe} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
