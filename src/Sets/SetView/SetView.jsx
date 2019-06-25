import React, { useState, useRef } from 'react';

import './setView.scss';

export default function SetView(props) {

	const [reps, setReps] = useState(props.reps);
	const [weight, setWeight] = useState(props.weight);

	const formElement = useRef(null);

	function editData() {
		formElement.current.classList.add('show');
	}

	function updateData(e, index, reps, weight) {
		e.preventDefault();
		props.updateSetInfo(index, reps, weight);
		formElement.current.classList.remove('show');
	}

	return (

		<div className='container'>

			<div className='set-view'>
				<h4>{props.reps} <span>reps</span> x {props.weight}<span> lbs</span></h4>
				<button onClick={editData} className='set-view--edit'>Edit</button>
			</div>

			<div ref={formElement} className='set-modifier'>
				<div className='addSet'>
					<form>
						<div>
							<label>Reps</label>
							<input
								type='number'
								placeholder='0'
								value={reps}
								onChange={(e) => { setReps(e.target.value) }}
							/>
						</div>

						<hr />

						<div>
							<label>Weight <span>(lbs)</span></label>
							<input
								type='number'
								placeholder='0'
								value={weight}
								onChange={(e) => { setWeight(e.target.value) }}
							/>
						</div>

						<button onClick={(e) => { updateData(e, props.index, reps, weight) }}>Update Set</button>
					</form>
				</div>

			</div>
		</div>
	);

}

