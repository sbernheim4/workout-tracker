import React, { useState, useEffect } from 'react';

import ExerciseOption from './ExerciseOption/ExerciseOptions.jsx';

import './exercises.scss';

import data from './../Util/exercises.json';

const allExercises = data.Exercises;

export default function Exercises() {

	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		const list = allExercises.filter((exercise) => {
			return exercise.Name.includes(searchTerm) || exercise['Muscle Group'].includes(searchTerm);
		});

		setExercisesToDisplay(list);
	})

	const [exercisesToDisplay, setExercisesToDisplay] = useState(allExercises);

	return (
		<div className='exercises'>

			<input type='text' value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} />

			{exercisesToDisplay.map((exercise, index) => {
				return <ExerciseOption
						key={index}
						name={exercise.Name}
						type={exercise['Muscle Group']}
					/>
			})}
		</div>
	);
}
