import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getExercises, deleteExercise } from '../../actions/exercises';
import AddExerciseForm from './AddExerciseForm';

export class Exercises extends Component {
    static propTypes = {
        exercises: PropTypes.array.isRequired,
        getExercises: PropTypes.func.isRequired,
        deleteExercise: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getExercises();
    }

    render() {
        return (
            <Fragment>
                <h1>Exercises</h1>
                <AddExerciseForm />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.exercises.map((exercises) => (
                            <tr key={exercises.id}>
                                <td>{exercises.id}</td>
                                <td>{exercises.name}</td>
                                <td>{exercises.description}</td>
                                <td>
                                    <button
                                        onClick={this.props.deleteExercise.bind(
                                            this,
                                            exercises.id
                                        )}
                                        className="btn btn-danger brn-sm"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    exercises: state.exercises.exercises,
});

export default connect(mapStateToProps, { getExercises, deleteExercise })(
    Exercises
);
