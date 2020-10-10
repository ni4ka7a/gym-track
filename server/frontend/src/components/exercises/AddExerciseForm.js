import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExercise } from '../../actions/exercises';

export class AddExerciseForm extends Component {
    state = {
        name: '',
        description: '',
    };

    static propTypes = {
        addExercise: PropTypes.func.isRequired,
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        const { name, description } = this.state;
        const exercise = { name, description };
        this.props.addExercise(exercise);

        this.setState({
            name: '',
            description: '',
        });
    };

    render() {
        const { name, description } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Exercise</h2>
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
        );
    }
}

export default connect(null, { addExercise })(AddExerciseForm);
