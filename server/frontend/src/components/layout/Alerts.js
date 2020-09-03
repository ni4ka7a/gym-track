import React, { Component, Fragment } from 'react'
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props;
        if (error !== prevProps.error) {
            if (error.message.name) alert.error(`Name: ${error.message.name.join()}`);
            if (error.message.description) alert.error(`Email: ${error.message.description.join()}`);
        }

        if (message !== prevProps.message) {
            if (message.deleteWorkout) {
                alert.success(message.deleteWorkout);
            }

            if (message.addWorkout) {
                alert.success(message.addWorkout);
            }
        }
    }

    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired,
      };

    render() {
        return (
            <Fragment />
        )
    }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

// export default Alerts
// export default withAlert(Alerts)
export default connect(mapStateToProps)(withAlert()(Alerts));
