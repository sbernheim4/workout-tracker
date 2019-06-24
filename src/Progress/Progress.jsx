import React, { useState } from 'react';

import { toTitleCase } from './../Util/util.js';

import './progress.scss';

export default function Progress(props) {

    const exercise = toTitleCase(props.exercise);

    const [reps, setReps] = useState(0);
    const [weight, setWeight] = useState(0);

    return (

        <div className='progress'>
            <h2>{exercise}</h2>
            <form onSubmit={submitData}>

                <div>
                    <label>Reps</label>
                    <input type='number' value={reps} onChange={(e) => { setReps(e.target.value) }} />
                </div>

                <hr />

                <div>
                    <label>Weight</label>
                    <input type='number' value={weight} onChange={(e) => { setWeight(e.target.value) }} />
                </div>

                <button>Add</button>
            </form>
        </div>
    );
}

function submitData(e) {
    e.preventDefault();
}
