import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getRoutines, deleteRoutine } from '../../actions/routines';
import AddRoutineForm from './AddRoutineForm';

export class Routines extends Component {
    static propTypes = {
        routines: PropTypes.array.isRequired,
        getRoutines: PropTypes.func.isRequired,
        deleteRoutine: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getRoutines();
    }

    render() {
        return (
            <Fragment>
                <h1>Routines</h1>
                <AddRoutineForm />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Exercises</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.routines.map((routine) => (
                            <tr key={routine.id}>
                                <td>{routine.id}</td>
                                <td>{routine.name}</td>
                                <td>{routine.description}</td>
                                <td>
                                    {routine.exercises
                                        .map((x) => x.name)
                                        .join(' ,')}
                                </td>
                                <td>
                                    <button
                                        onClick={this.props.deleteRoutine.bind(
                                            this,
                                            routine.id
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
    routines: state.routines.routines,
});

export default connect(mapStateToProps, { getRoutines, deleteRoutine })(
    Routines
);
