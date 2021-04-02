import React from 'react';
import RecipeDetails from './RecipeDetails/RecipeDetails';

const RecipePage = (props) => {
  
  console.log(props);
  return (
      <RecipeDetails props={props}/>
  );
};

export default RecipePage;