import React, { useState } from 'react';

import ExerciseList from './ExerciseList/ExerciseList.jsx';

import './exercises.scss';

export default function Exercises() {

	const [searchTerm, setSearchTerm] = useState('');
	const [exercises, setExercises] = useState([]);

	/*
	 *
	 * @param {Object} exercise - The exercise to be added to the list of selected exercises
	 *
	 * */
	function addExerciseToList(exercise) {
		const updatedExercises = [...exercises, exercise];

		setExercises(updatedExercises);
	}

	/*
	 *
	 * @param {Object} exercise - The exercise to be removed to the list of selected exercises
	 *
	 * */
	function removeExerciseFromList(exercise) {
		let updatedExercises = [];

		exercises.forEach(ex => {

			if (ex.name !== exercise.name) {
				updatedExercises.push(ex);
			}

		});

		setExercises(updatedExercises);
	}

	function saveSelectedExercise() {
		console.log(exercises);
	}

	return (

		<div className='exercises'>

			<div className='exercises--search'>
				<input
					className='exercises--search--input'
					type='text'
					placeholder='Search'
					value={searchTerm}
					onChange={(e) => { setSearchTerm(e.target.value) }}
				/>

				<button className='exercises--search--add' onClick={saveSelectedExercise}>Add ({exercises.length})</button>
			</div>

			<ExerciseList
				searchTerm={searchTerm}
				addExercise={addExerciseToList}
				removeExercise={removeExerciseFromList}
			/>

		</div>
	);
}
