import React from 'react';
import { withRouter } from 'react-router-dom';

const RecipeDetails = (props) => {
	return (
		<div>
			<h1>{props.location.state.name}</h1>
		</div>
	);
};
export default withRouter(RecipeDetails);
