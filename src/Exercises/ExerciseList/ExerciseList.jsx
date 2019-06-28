import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ExerciseOption from './../ExerciseOption/ExerciseOptions.jsx';

import data from './../../Util/exercises.json';

const allExercises = data.Exercises;

export default class ExerciseList extends Component {

	constructor(props) {
		super(props);
	}

	componentDidUpdate(prevProps) {

		if (prevProps.searchTerm !== this.props.searchTerm) {

			allExercises.forEach((exercise) => {

				// Search both the name of the exercise and the associated muscle group
				const name = exercise.Name.trim().toLowerCase();
				const muscleGroup = exercise['Muscle Group'].trim().toLowerCase();

				// Get the ref value to effect the search results
				const refValue = exercise.Name.replace(/ /g, '');
				const node = ReactDOM.findDOMNode(this.refs[refValue]);

				if (name.includes(this.props.searchTerm) || muscleGroup.includes(this.props.searchTerm)) {
					node.classList.remove('hide');
				} else {
					node.classList.add('hide');
				}

			});
		}
	}

	render() {

		return (

			<div className='exercise--list'>

				{allExercises.map((exercise, index) => {

					const exerciseName = exercise.Name.replace(/ /g, '');

					return <ExerciseOption
						ref={exerciseName}
						key={index}
						addExercise={this.props.addExercise}
						removeExercise={this.props.removeExercise}
						name={exercise.Name}
						muscle={exercise['Muscle Group']}
						joint={exercise['Joint']}
					/>

				})}

			</div>
		);
	}
}
