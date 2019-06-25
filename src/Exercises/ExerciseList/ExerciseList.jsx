import React, { useState, useEffect } from 'react';

import ExerciseOption from './../ExerciseOption/ExerciseOptions.jsx';

import data from './../../Util/exercises.json';

const allExercises = data.Exercises;

export default function ExerciseList(props) {

	const [exercisesToDisplay, setExercisesToDisplay] = useState([allExercises]);

	useEffect(() => {

		const list = allExercises.filter((exercise) => {

			const name = exercise.Name.trim().toLowerCase();
			const muscleGroup = exercise['Muscle Group'].trim().toLowerCase();

			return (
				name.includes(props.searchTerm) ||
				muscleGroup.includes(props.searchTerm)
			);
		});

		setExercisesToDisplay(list);
	})

	return (
		<div className='exercise-list'>
			{exercisesToDisplay.map((exercise, index) => {
				return <ExerciseOption
					key={index}
					index={index}
					addExercise={props.addExercise}
					removeExercise={props.removeExercise}
					name={exercise.Name}
					muscle={exercise['Muscle Group']}
					joint={exercise['Joint']}
				/>
			})}
		</div>
	);

}
