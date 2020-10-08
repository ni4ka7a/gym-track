import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWorkouts, deleteWorkout } from '../../actions/workouts';
import AddWorkoutForm from './AddWorkoutForm';

export class Workouts extends Component {
  static propTypes = {
    workouts: PropTypes.array.isRequired,
    getWorkouts: PropTypes.func.isRequired,
    deleteWorkout: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getWorkouts();
  }

  render() {
    return (
      <Fragment>
        <h1>Workouts</h1>
        <AddWorkoutForm />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {this.props.workouts.map((workout) => (
              <tr key={workout.id}>
                <td>{workout.id}</td>
                <td>{workout.name}</td>
                <td>{workout.description}</td>
                <td>
                  <button
                    onClick={this.props.deleteWorkout.bind(this, workout.id)}
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
  workouts: state.workouts.workouts,
});

export default connect(mapStateToProps, { getWorkouts, deleteWorkout })(
  Workouts
);
