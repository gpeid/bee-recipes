import React from 'react';
import styles from './Card.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import { RecipeCounter } from '../Counter/Counter';
import { Link } from 'react-router-dom';

const Card = (props) => {
	const { ingredients, id, index, name, diet_type } = props;

	const displayIngredients = () => {
		return ingredients.map((ingredient, index) => (
			<div key={index}>
				<Checkbox
					id={`${id}_${name}_${index}`}
					type="checkbox"
					key={ingredient}
					value={ingredient}
				/>{' '}
				<label htmlFor={`${id}_${name}_${index}`}>{ingredient}</label>
			</div>
		));
	};

	return (
		<div key={id} className={styles.card}>
			<h3>
				{index}) ID:{id} - {name}
			</h3>
			<RecipeCounter />
			<h4>Diet Type: {diet_type}</h4>
			<h4>Ingredients:</h4>
			{displayIngredients()}

			<Link
				to={{
					pathname: `/recipe/${id}`,
					state: props,
				}}
			>
				Go to Recipe!
			</Link>
		</div>
	);
};

export default Card;
