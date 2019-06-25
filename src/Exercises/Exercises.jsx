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

			return (
				name.includes(normalizedSearchTerm) ||
				muscleGroup.includes(normalizedSearchTerm)
			);

		});

		setExercisesToDisplay(list);

	});

	const [exercisesToDisplay, setExercisesToDisplay] = useState(allExercises);
	const [exercises, setExercises] = useState([]);

	function addExerciseToList(exercise) {

		let updatedExercises = exercises;
		updatedExercises.push(exercise);
		setExercises(updatedExercises);

	}

	function removeExerciseFromList(index) {

		const updatedExercises = [
			...exercises.slice(0, index),
			...exercises.slice(index + 1)
		];

		setExercises(updatedExercises);

	}

	function saveSelectedExercise() {
		console.log(exercises);
	}

	return (
		<div className='exercises'>

			<div className='exercises--main'>
				<input
					className='exercises--main--input'
					type='text'
					placeholder='Search'
					value={searchTerm}
					onChange={(e) => { setSearchTerm(e.target.value) }}
				/>

				<button className='exercises--main--add' onClick={saveSelectedExercise}>Add</button>
			</div>

			{exercisesToDisplay.map((exercise, index) => {
				return <ExerciseOption
					key={index}
					index={index}
					addExercise={addExerciseToList}
					removeExercise={removeExerciseFromList}
					name={exercise.Name}
					muscle={exercise['Muscle Group']}
					joint={exercise['Joint']}
				/>
			})}

		</div>
	);
}
