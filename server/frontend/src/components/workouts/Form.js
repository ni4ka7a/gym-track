import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addWorkout } from '../../actions/workouts';

export class Form extends Component {
    state = {
        name: '',
        description: ''
    };

    static propTypes = {
        addWorkout: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });
    // onChange = e => {};

    onSubmit = e => {
        e.preventDefault();
        console.log('submit');
        const { name, description } = this.state;
        const workout = { name, description };
        this.props.addWorkout(workout);

        this.setState({
            name: '',
            description: ''
        });
    };
 
    render() {
        const { name, description } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Workout</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={this.onChange}
                            value={name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input
                            className="form-control"
                            type="text"
                            name="description"
                            onChange={this.onChange}
                            value={description}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                    </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { addWorkout })
(Form)
