import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

const RecipeDetails = ({ location, history }) => {
  console.log(location);
  useEffect(() => {
    !location.state && history.goBack();
  }, []);

  try {
    const listIngredients = location.state.ingredients ? (
      <ul>
        {location.state.ingredients.map((ingredient, i) => {
          return <li>{ingredient}</li>;
        })}
      </ul>
    ) : null;
    const displayDetails = (
      <div>
        <h1>{location.state.name}</h1>
        <p>{location.state.diet_type}</p>
        {listIngredients}
        <p>{location.state.notes}</p>
        <button
          onClick={() => {
            history.goBack();
          }}
        >
          Go back
        </button>
      </div>
    );
    return displayDetails;
  } catch (err) {
    return "There was an error";
  }
};
export default withRouter(RecipeDetails);
