import * as _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExercise } from '../../actions/exercises';

export class AddExerciseForm extends Component {
    state = {
        name: '',
        description: '',
        category: '',
        bodyPart: '',
    };

    static propTypes = {
        addExercise: PropTypes.func.isRequired,
        exerciseCategories: PropTypes.object.isRequired,
        exerciseBodyParts: PropTypes.object.isRequired,
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        const { name, description, category, bodyPart } = this.state;
        const exercise = { name, description, category, bodypart: bodyPart };
        this.props.addExercise(exercise);

        this.setState({
            name: '',
            description: '',
            category: '',
            bodyPart: '',
        });
    };

    render() {
        const { name, description, category, bodyPart } = this.state;
        const { exerciseCategories, exerciseBodyParts } = this.props;
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
                    <div class="form-group">
                        <label>Category</label>
                        <select
                            class="form-control"
                            id="categorySelect"
                            name="category"
                            multiple={false}
                            onChange={this.onChange}
                            value={category}
                        >
                            <option value="">Select category</option>
                            {_.map(exerciseCategories, (value, key) => (
                                <option key={key} value={key}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Body Part</label>
                        <select
                            class="form-control"
                            id="bodyPartSelect"
                            name="bodyPart"
                            multiple={false}
                            onChange={this.onChange}
                            value={bodyPart}
                        >
                            <option>Select body part</option>
                            {_.map(exerciseBodyParts, (value, key) => (
                                <option key={key} value={key}>
                                    {value}
                                </option>
                            ))}
                        </select>
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

// const mapStateToProps = (state) => ({
//     exerciseCategories: state.exercises.exerciseCategories,
//     exerciseBodyParts: state.exercises.exerciseBodyParts,
// });

export default connect(null, {
    addExercise,
})(AddExerciseForm);
