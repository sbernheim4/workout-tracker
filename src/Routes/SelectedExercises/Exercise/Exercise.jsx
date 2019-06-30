import React from 'react';

import './exercise.scss';

export default function Exercise(props) {

	return (

		<div className='exercise'>
			<p className='exercise--index'>{props.index + 1}</p>
			<h2>{props.exercise.name}</h2>
			<p className='exercise--muscle'>{props.exercise.muscle}</p>
		</div>

	);

}
