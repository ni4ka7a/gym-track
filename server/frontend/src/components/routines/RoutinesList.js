import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Routines extends Component {
  static propTypes = {};

  render() {
    return (
      <Fragment>
        <h1>Routines list</h1>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  // workouts: state.workouts.workouts
});

export default connect(mapStateToProps, {})(Routines);
