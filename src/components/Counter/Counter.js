import React, { useState } from 'react';
import { Button } from '@material-ui/core';

export function RecipeCounter() {
	const [count, setCount] = useState(0);
	console.log(count);
	return (
		<div>
			<p>{count} people have used this recipe</p>
			<Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>
				I've used this recipe!
			</Button>
		</div>
	);
}