import React, { useState } from 'react';

import ExerciseList from './ExerciseList/ExerciseList.jsx';

import './exercises.scss';

export default function Exercises() {

	const [searchTerm, setSearchTerm] = useState('');
	const [exercises, setExercises] = useState([]);

	function addExerciseToList(exercise) {

		const updatedExercises = [...exercises, exercise];

		setExercises(updatedExercises);

		//console.log('adding...');
		//console.log(exercise);
		//console.log(updatedExercises);

	}

	function removeExerciseFromList(index) {

		const updatedExercises = [
			...exercises.slice(0, index),
			...exercises.slice(index + 1)
		];

		setExercises(updatedExercises);

		//console.log('removing...');
		//console.log(index);
		//console.log(updatedExercises);

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

			<ExerciseList
				searchTerm={searchTerm}
				addExercise={addExerciseToList}
				removeExercise={removeExerciseFromList}
			/>

		</div>
	);
}
