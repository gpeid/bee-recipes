import React, { Component, Fragment } from "react";
import styles from "./Recipe.module.css";
import { shuffle } from "./../../Functions";
import { RECIPES } from "../../data/recipesData";
import Checkbox from "@material-ui/core/Checkbox";
import { RecipeCounter } from "./../Counter/Counter";

export default class Recipe extends Component {
  render() {
    var splitArray = inputArray => {
      return inputArray.split(", ");
    };

    var recipeCard = () => {
      return (
        <div key={this.props.id} className={styles.recipe_item}>
          <h3>
            {this.index} {this.props.index}) ID:{this.props.id} -{" "}
            {this.props.name}splitArray 
          </h3>
          <RecipeCounter />
          <h4>Diet Type: {this.props.diet_type}</h4>
          <h5>Ingredients: </h5>
          {splitArray(this.props.ingredients).map((ingredient, index) => (
            <div key={index}>
              <Checkbox
                id={`${this.props.id}_${this.props.name}_${index}`}
                type="checkbox"
                key={ingredient}
                value={ingredient}
              />{" "}
              <label htmlFor={`${this.props.id}_${this.props.name}_${index}`}>
                {index + 1} {ingredient}
              </label>
            </div>
          ))}
        </div>
      );
    };
    return <Fragment>{recipeCard()}</Fragment>;
  }
}
