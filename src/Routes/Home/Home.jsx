import React, { Component } from "react";

import Exercises from './../../Exercises/Exercises.jsx';
import Sets from './../../Sets/Sets.jsx';

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
				<Exercises />
				<br/>
				<br/>
				<Sets />
			</div>
		);
	}
}

export default Home;
