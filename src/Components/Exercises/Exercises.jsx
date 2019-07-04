import React, { Component } from 'react';
import { Redirect } from 'react-router';

import ExerciseList from './ExerciseList/ExerciseList.jsx';

import './exercises.scss';

export default class Exercises extends Component {

	constructor(props) {
		super(props);

		this.state = {
			searchTerm: '',
			exercises: []
		}

		this.addExerciseToList = this.addExerciseToList.bind(this);
		this.removeExerciseFromList = this.removeExerciseFromList.bind(this);
		this.saveSelectedExercise = this.saveSelectedExercise.bind(this);

	}

	/*
	 *
	 * @param {Object} exercise - The exercise to be added to the list of selected exercises
	 *
	 * */
	addExerciseToList(exercise) {

		const updatedExercises = [...this.state.exercises, exercise];

		this.setState({
			exercises: updatedExercises
		});

	}

	/*
	 *
	 * @param {Object} exercise - The exercise to be removed to the list of selected exercises
	 *
	 * */
	removeExerciseFromList(exercise) {

		let updatedExercises = [];

		this.state.exercises.forEach(ex => {

			if (ex.name !== exercise.name) {
				updatedExercises.push(ex);
			}

		});

		this.setState({
			exercises: updatedExercises
		});

	}

	saveSelectedExercise() {
		this.setState({
			redirect: true
		});
	}

	render() {

		if (this.state.redirect) {

			return <Redirect to={{
				pathname: '/workout-plan',
				state: {
					exercises: this.state.exercises
				}
			}} />

		} else {

			return (

				<div className='exercises'>

					<div className='exercises--search'>
						<input
							className='exercises--search--input'
							type='text'
							placeholder='Search'
							value={this.state.searchTerm}
							onChange={(e) => { this.setState({
								searchTerm: e.target.value
							}); }}
						/>

					<button className='exercises--search--add' onClick={this.saveSelectedExercise}>Add ({this.state.exercises.length})</button>
				</div>

				<ExerciseList
					searchTerm={this.state.searchTerm}
					addExercise={this.addExerciseToList}
					removeExercise={this.removeExerciseFromList}
				/>

		</div>
			);
		}

	}
}
