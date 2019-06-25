import React, { Component } from 'react';

import SetView from './SetView/SetView.jsx';
import AddSet from './AddSet/AddSet.jsx';

import './sets.scss';

export default class Sets extends Component {

	constructor(props) {

		super(props);

		this.state = {
			sets: []
		}

		this.addSet = this.addSet.bind(this);
		this.updateSetInfo = this.updateSetInfo.bind(this);
		this.removeSet = this.removeSet.bind(this);
	}

	addSet(reps, weight) {

		const updatedState = this.state.sets;

		const newSet = {
			reps,
			weight
		};

		updatedState.push(newSet);

		this.setState({
			sets: updatedState
		});
	}

	updateSetInfo(index, reps, weight) {
		const updatedSet = {
			reps: reps,
			weight: weight
		};

		const currentState = this.state.sets;

		const newList = [
			...currentState.slice(0, index),
			...[updatedSet],
			...currentState.slice(index + 1)
		];

		this.setState({
			sets: newList
		});
	}

	removeSet(index) {

		const currentState = this.state.sets;

		const updatedList = [
			...currentState.slice(0, index),
			...currentState.slice(index + 1)
		];

		this.setState({
			sets: updatedList
		});

	}

	render() {

		return (
			<div className='sets'>
				<div className='sets--add'>
					<AddSet addSet={this.addSet} exercise={'Dumbbell Curl'}/>
				</div>

				{this.state.sets.map((set, index) => {
					return <SetView
						updateSetInfo={this.updateSetInfo}
						removeSet={this.removeSet}
						key={index}
						reps={set.reps}
						weight={set.weight}
						index={index}
					/>
				})}

			</div>
		);
	}
}

