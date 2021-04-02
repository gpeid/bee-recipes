import React from 'react';
import styles from './RecipeContainer.module.css';
import Card from '../components/Card/Card';
import { shuffle } from './../Functions';
import { RECIPES } from './../data/recipesData';

// import Checkbox from "@material-ui/core/Checkbox";

const RecipeContainer = () => {
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
			<Card {...randomRecipe} index="Random" />
			{// recipeMap()
			recipes.map((recipe, index) => (
				<Card {...recipe} index={index} key={index} />
			))}
		</div>
	);
};

export default RecipeContainer;