import React, { Fragment } from 'react';
import AddWorkoutForm from './AddWorkoutForm';
import Workouts from './Workouts';

export default function Dashboard() {
  return (
    <Fragment>
      <AddWorkoutForm />
      <Workouts />
    </Fragment>
  );
}
