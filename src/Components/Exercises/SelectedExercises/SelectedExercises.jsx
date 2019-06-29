import React from 'react';

import './selectedExercises.scss';

export default function SelectedExercises(props) {

	props.location.state.exercises.map((exercise) => {

		console.log(exercise.name);

	});

	return (

		<div>
			{props.location.state.exercises.map((exercise, index) => {
				return <p key={index}>{exercise.name}</p>
			})}
		</div>

	);
}
