import React, { Component } from 'react';

import './setView.scss';

class SetView extends Component {

	constructor(props) {
		super(props);

		this.state = {
		};
	}

	render() {

		return (
			<div className='set-view'>
				<h4>{this.props.reps} <span>reps</span> x {this.props.weight}<span> lbs</span></h4>
				<h4 className='set-view--edit'>Edit</h4>
			</div>
		);
	}

}

export default SetView;

