import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "./navbar.css";

class Navbar extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav className='navbar'>
				<Link to='/select-exercises'>Exercises</Link>

				<hr/>

				<Link to='/set-manager'>Sets</Link>
			</nav>
		);
	}
}

export default Navbar;
