import React, { useState } from 'react';

import { toTitleCase } from './../../Util/util.js';

import './addSet.scss';

let updateParent;

export default function AddSet(props) {

	const [reps, setReps] = useState();
	const [weight, setWeight] = useState();

	updateParent = props.addSet;

	return (
		<div className='addSet'>
			<h3>Current Set</h3>
			<form onSubmit={submitData}>

				<div>
					<label>Reps</label>
					<input type='number' placeholder='0' value={reps} onChange={(e) => { setReps(e.target.value) }} />
				</div>

				<hr />

				<div>
					<label>Weight <span>(lbs)</span></label>
					<input type='number' placeholder='0' value={weight} onChange={(e) => { setWeight(e.target.value) }} />
				</div>

				<button onClick={(e) => { submitData(e, reps, weight) }}>Complete Set</button>
			</form>
		</div>
	);
}

function submitData(e, reps = 0, weight = 0) {
	e.preventDefault();
	updateParent(reps, weight);
}
