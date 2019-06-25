import React, { Component } from 'react';

import { toTitleCase } from './../../Util/util.js';

import './exerciseOption.scss';

class ExerciseOption extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isChecked: false
		};

		this.updateCheckbox = this.updateCheckbox.bind(this);

		const { addExercise, removeExercise, index } = props;

		this.addExercise = addExercise;
		this.removeExercise = removeExercise;
		this.index = index;

	}


	updateCheckbox(event) {
		const target = event.target;
		const checked = target.type === 'checkbox' ? target.checked : target.value;

		this.setState({
			isChecked: checked
		});

		// Update the list of exercises in the parent component
		const exercise = {
			name: this.props.name,
			muscle: this.props.muscle,
			joint: this.props.joint
		}
		checked ? this.addExercise(exercise) : this.removeExercise(this.index);
	}

	render() {

		const name = toTitleCase(this.props.name);
		const muscle = toTitleCase(this.props.muscle);

		return (
			<div className='exercise-option'>
				<h2>{name}</h2>
				<h3>{muscle}</h3>
				<input
					type="checkbox"
					name={name}
					checked={this.state.isChecked}
					onChange={this.updateCheckbox}
				/>
			</div>
		);
	}

}

export default ExerciseOption;

