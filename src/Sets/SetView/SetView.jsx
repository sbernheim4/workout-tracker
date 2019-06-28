import React, { useState, useRef } from 'react';
import Check from 'check-types';

const {
	number
} = Check;

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

	/*
	 *
	 * @param {Object} e
	 * @param {Number} index - Index location in sets of the set being updated
	 * @param {Number} reps - The number of reps for the given set
	 * @param {Number} weight - The weight used for the given set
	 *
	 * */
	function updateSet(e, index, reps, weight) {
		e.preventDefault();

		reps = parseInt(reps);
		weight = parseInt(weight);

		if (number(reps) && number(weight)) {

			props.updateSetInfo(index, reps, weight);

			formElement.current.classList.remove('show');
			setElement.current.classList.remove('set-view--editable');

		}
	}

	function removeSet(e) {
		e.preventDefault();
		props.removeSet(props.index);
	}

	return (

		<div className='sets--list'>

			<div ref={setElement} className='sets--list--item'>

				<h4>
					<span className='sets--list--item__number'>{props.reps}</span> <span className='sets--list--item__subscript'>reps</span> x <span className='sets--list--item__number'>{props.weight}</span> <span className='sets--list--item__subscript'> lbs</span>
				</h4>

				<button onClick={removeSet} className='sets--list--item__remove'>x</button>
				<button onClick={editSet} className='sets--list--item__edit'>Edit</button>
			</div>

			<div ref={formElement} className='sets--list--modifier'>
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

