import React, { Component } from 'react';
import styles from './RecipeContainer.module.css';
import Recipe from './../components/Recipe/Recipe';
import { shuffle } from './../Functions';
import { RECIPES } from './../data/recipesData';

// import Checkbox from "@material-ui/core/Checkbox";

export default class RecipeContainer extends Component {
	render() {
		let recipes = shuffle(RECIPES);

		let randomRecipe =
			recipes[Math.floor(Math.random() * Math.floor(recipes.length))];
		// var recipeMap = () => {
		//   return recipes.map((recipe,index) => (
		//     <Recipe />
		//   ));
		// };
		return (
			<div className={styles.recipes}>
				<Recipe {...randomRecipe} index="Random" />
				{// recipeMap()
				recipes.map((recipe, index) => (
					<Recipe {...recipe} index={index} key={index} />
				))}
			</div>
		);
	}
}
