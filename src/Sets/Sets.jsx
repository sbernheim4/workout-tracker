import React, { useState } from 'react';

import SetView from './SetView/SetView.jsx';
import AddSet from './AddSet/AddSet.jsx';

import Check from 'check-types';

const {
	number
} = Check;

import './sets.scss';

export default function Sets() {

	const [sets, setSets] = useState([]);

	function addSet(reps, weight) {

		const currentSets = sets;

		reps = parseInt(reps.trim());
		weight = parseInt(weight.trim());

		if (number(reps) && number(weight)) {

			const newSet = {
				reps,
				weight
			};

			const updatedSets = [
				...currentSets,
				newSet
			];

			setSets(updatedSets);

		}
	}

	/*
	 *
	 * @param {Number} index - The index of the set in `sets` that should be updated
	 * @param {Number} reps - What `reps` will be updated to for the `set` at position `index`
	 * @param {Number} weight - What `weight` will be updated to for the `set` at position `index`
	 *
	 * */
	function updateSetInfo(index, reps, weight) {

		const updatedSet = {
			reps: reps,
			weight: weight
		};

		const currentSets = sets;

		const updatedSets = [
			...currentSets.slice(0, index),
			updatedSet,
			...currentSets.slice(index + 1)
		];

		setSets(updatedSets);

	}

	/*
	 *
	 * @param {Number} index - Index in `sets` that should be removed
	 *
	 * */
	function removeSet(index) {

		const currentSets = sets;

		const updatedSets = [
			...currentSets.slice(0, index),
			...currentSets.slice(index + 1)
		];

		setSets(updatedSets);

	}

	return (

		<div className='sets'>
			<div className='sets--add'>
				<AddSet addSet={addSet} exercise={'Dumbbell Curl'}/>
			</div>

			{sets.map((set, index) => {
				return <SetView
					updateSetInfo={updateSetInfo}
					removeSet={removeSet}
					key={index}
					reps={set.reps}
					weight={set.weight}
					index={index}
				/>
			})}

		</div>
	);
}

