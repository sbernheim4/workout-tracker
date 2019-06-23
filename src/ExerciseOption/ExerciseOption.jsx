import React, { Component } from 'react';

import { toTitleCase } from './../Util/util.js';

import './exerciseOption.scss';

class ExerciseOption extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isChecked: true
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            isChecked: value
        });
    }

    render() {

        const name = toTitleCase(this.props.name);
        const type = toTitleCase(this.props.type);

        return (
            <div className='exercise-option'>
                <input
                    type="checkbox"
                    name={name}
                    checked={this.state.isChecked}
                    onChange={this.handleChange}
                />
                <h2>{name}</h2>
                <h3>{type}</h3>
            </div>
        );
    }

}

export default ExerciseOption;
