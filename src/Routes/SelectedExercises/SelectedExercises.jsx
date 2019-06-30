import React from 'react';

import Exercise from './Exercise/Exercise.jsx';

import './selectedExercises.scss';

export default function SelectedExercises(props) {

	return (

		<div className='selected-exercises'>

			<h1 className='selected-exercises--title'>Selected Exercises</h1>

			{props.location.state.exercises.map((exercise, index) => {

				return (
					<Exercise
						index={index}
						key={index}
						exercise={exercise}
					/>
				);
			})}

		</div>

	);
}
