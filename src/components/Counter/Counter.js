import React, { useState } from "react";

export function RecipeCounter() {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <div>
      <p>{count} people have used this recipe</p>
      <button onClick={() => setCount(count + 1)}>
        I've used this recipe!
      </button>
    </div>
  );
}