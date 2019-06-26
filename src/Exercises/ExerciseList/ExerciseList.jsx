import React, { Component } from 'react';

import ExerciseOption from './../ExerciseOption/ExerciseOptions.jsx';

import data from './../../Util/exercises.json';

const allExercises = data.Exercises;

class ExerciseList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			exercisesToDisplay: allExercises,
		};
	}

	componentDidUpdate(prevProps) {

		if (prevProps.searchTerm !== this.props.searchTerm) {

			const list = allExercises.filter((exercise) => {

				const name = exercise.Name.trim().toLowerCase();
				const muscleGroup = exercise['Muscle Group'].trim().toLowerCase();

				return (
					name.includes(this.props.searchTerm) ||
					muscleGroup.includes(this.props.searchTerm)
				);

			});

			this.setState({
				exercisesToDisplay: list
			});

		}

	}

	render() {

		return (

			<div className='exercise-list'>

				{this.state.exercisesToDisplay.map((exercise, index) => {
					return <ExerciseOption
						key={exercise.Name.replace(/ /g, '')}
						addExercise={this.props.addExercise}
						removeExercise={this.props.removeExercise}
						name={exercise.Name}
						muscle={exercise['Muscle Group']}
						joint={exercise['Joint']}
						checked={null}
					/>
				})}

			</div>

		);
	}

}

export default ExerciseList;
