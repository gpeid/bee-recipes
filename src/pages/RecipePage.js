import React from 'react';
import RecipeDetails from './RecipeDetails/RecipeDetails';

const RecipePage = (props) => {
  return (
      <RecipeDetails details={props}/>
  );
};

export default RecipePage;