import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props;
        if (error !== prevProps.error) {
            if (error.message.name)
                alert.error(`Name: ${error.message.name.join()}`);
            if (error.message.description)
                alert.error(`Email: ${error.message.description.join()}`);
            if (error.message.non_field_errors)
                alert.error(`Email: ${error.message.non_field_errors.join()}`);
            if (error.message.username)
                alert.error(error.message.username.join());
        }

        if (message !== prevProps.message) {
            if (message.deleteWorkout) {
                alert.success(message.deleteWorkout);
            }

            if (message.addWorkout) {
                alert.success(message.addWorkout);
            }

            if (message.deleteRoutine) {
                alert.success(message.deleteRoutine);
            }

            if (message.addRoutine) {
                alert.success(message.addRoutine);
            }

            if (message.deleteExercise) {
                alert.success(message.deleteExercise);
            }

            if (message.addExercise) {
                alert.success(message.addExercise);
            }

            if (message.passwordNotMatch) {
                alert.error(message.passwordNotMatch);
            }
        }
    }

    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired,
    };

    render() {
        return <Fragment />;
    }
}

const mapStateToProps = (state) => ({
    error: state.errors,
    message: state.messages,
});

// export default Alerts
// export default withAlert(Alerts)
export default connect(mapStateToProps)(withAlert()(Alerts));
