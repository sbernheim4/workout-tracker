import React, { useState } from 'react';

import './addSet.scss';

let updateParentState;

export default function AddSet(props) {

	const [reps, setReps] = useState();
	const [weight, setWeight] = useState();

	updateParentState = props.addSet;

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

/*
 *
 * @param {Object} e
 * @param {Number} reps=0
 * @param {Number} weight=0
 *
 * */
function submitData(e, reps = 0, weight = 0) {
	e.preventDefault();
	updateParentState(reps, weight);
}
