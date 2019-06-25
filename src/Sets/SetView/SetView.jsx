import React from 'react';

import './setView.scss';

export default function SetView(props) {

	return (
		<div className='set-view'>
			<h4>{props.reps} <span>reps</span> x {props.weight}<span> lbs</span></h4>
			<h4 className='set-view--edit'>Edit</h4>
		</div>
	);

}
