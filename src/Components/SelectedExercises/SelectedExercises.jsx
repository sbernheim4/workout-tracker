import React, { useState } from 'react';

import Exercise from './Exercise/Exercise.jsx';

import './selectedExercises.scss';

export default function SelectedExercises(props) {

	const [exercises, setExercises] = useState(props.location.state.exercises)

	return (

		<div className='selected-exercises'>

			<h1 className='selected-exercises--title'>Your Workout Plan</h1>

			{exercises.map((exercise, index) => {

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
