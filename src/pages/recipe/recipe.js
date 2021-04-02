import React from 'react';

const Recipe = (props) => {
  console.log(props)
  return (
    <div>
    <h2>Recipe Description</h2>  
      {props.id}
    </div>
  );
};

export default Recipe;