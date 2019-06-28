import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ExerciseOption from './../ExerciseOption/ExerciseOptions.jsx';

import data from './../../Util/exercises.json';

const allExercises = data.Exercises;

class ExerciseList extends Component {

	constructor(props) {
		super(props);
	}

	componentDidUpdate(prevProps) {

		if (prevProps.searchTerm !== this.props.searchTerm) {

			allExercises.forEach((exercise) => {

				const name = exercise.Name.trim().toLowerCase();
				const muscleGroup = exercise['Muscle Group'].trim().toLowerCase();

				const refValue = exercise.Name.replace(/ /g, '');
				if (name.includes(this.props.searchTerm) || muscleGroup.includes(this.props.searchTerm)) {
					ReactDOM.findDOMNode(this.refs[refValue]).classList.remove('hide');
				} else {
					ReactDOM.findDOMNode(this.refs[refValue]).classList.add('hide');
				}

			});
		}
	}

	render() {

		return (

			<div className='exercise-list'>

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

export default ExerciseList;
