import React, { useState, useEffect } from 'react';

import ExerciseOption from './ExerciseOption/ExerciseOptions.jsx';

import './exercises.scss';

import data from './../Util/exercises.json';

const allExercises = data.Exercises;

export default function Exercises() {

	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		const normalizedSearchTerm = searchTerm.trim().toLowerCase();

		const list = allExercises.filter((exercise) => {

			const name = exercise.Name.trim().toLowerCase();
			const muscleGroup = exercise['Muscle Group'].trim().toLowerCase();

			return name.includes(normalizedSearchTerm) ||
				muscleGroup.includes(normalizedSearchTerm);
		});

		setExercisesToDisplay(list);
	})

	const [exercisesToDisplay, setExercisesToDisplay] = useState(allExercises);

	return (
		<div className='exercises'>

			<input
				className='exercises--input'
				type='text'
				placeholder='Search'
				value={searchTerm}
				onChange={(e) => { setSearchTerm(e.target.value) }}
			/>

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
