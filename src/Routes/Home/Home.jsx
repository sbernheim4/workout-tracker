import React, { Component } from "react";

import ExerciseOption from './../../ExerciseOption/ExerciseOption.jsx';

import './home.css';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {

		};
	}

	render() {
		return (
			<div className="home">
                <ExerciseOption name={'bench press'} type={'chest'}/>
			</div>
		);
	}
}

export default Home;
