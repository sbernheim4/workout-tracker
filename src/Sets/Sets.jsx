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

	}

	addSet(x, y) {

		const updatedState = this.state.sets;

		const newSet = {
			reps: x,
			weight: y
		};

		updatedState.push(newSet);

		this.setState({
			sets: updatedState
		});
	}

	render() {

		return (
			<div className='sets'>
				<div className='sets--add'>
					<AddSet addSet={this.addSet} exercise={'Dumbbell Curl'}/>
				</div>
				{this.state.sets.map((set, index) => {
					console.log(set);
						<SetView
							key={index}
							reps={set.reps}
							weight={set.weight}
						/>
				})}
			</div>
		);
	}
}

