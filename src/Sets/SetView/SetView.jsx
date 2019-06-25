import React, { useState, useRef } from 'react';

import './setView.scss';

export default function SetView(props) {

	const [reps, setReps] = useState(props.reps);
	const [weight, setWeight] = useState(props.weight);

	const setElement = useRef(null);
	const formElement = useRef(null);

	function editSet() {
		formElement.current.classList.toggle('show');
		setElement.current.classList.toggle('set-view--editable');
	}

	function updateSet(e, index, reps, weight) {
		e.preventDefault();
		props.updateSetInfo(index, reps, weight);
		formElement.current.classList.remove('show');
		setElement.current.classList.remove('set-view--editable');
	}

	function removeSet(e) {
		e.preventDefault();
		props.removeSet(props.index);
	}

	return (

		<div className='container'>

			<div ref={setElement} className='set-view'>
				<h4>{props.reps} <span>reps</span> x {props.weight}<span> lbs</span></h4>
				<button onClick={removeSet} className='set-view--remove'>x</button>
				<button onClick={editSet} className='set-view--edit'>Edit</button>
			</div>

			<div ref={formElement} className='set-modifier'>
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

					<button onClick={(e) => { updateSet(e, props.index, reps, weight) }}>Update Set</button>
				</form>
			</div>
		</div>
	);

}

