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
    };

    // TODO: get from API
    categories = [
        {
            value: 'BR',
            title: 'Barbel',
        },
        {
            value: 'DM',
            title: 'Dumbbell',
        },
        {
            value: 'MA',
            title: 'Machine',
        },
        {
            value: 'CA',
            title: 'Cardio',
        },
        {
            value: 'WB',
            title: 'Weighted Bodyweight',
        },
    ];

    bodyParts = [
        {
            value: 'CO',
            title: 'Core',
        },
        {
            value: 'AR',
            title: 'Arms',
        },
        {
            value: 'BA',
            title: 'Back',
        },
        {
            value: 'CH',
            title: 'Chest',
        },
        {
            value: 'LE',
            title: 'Legs',
        },
        {
            value: 'SH',
            title: 'Shoulders',
        },
        {
            value: 'OT',
            title: 'Other',
        },
        {
            value: 'FB',
            title: 'Full Body',
        },
        {
            value: 'CA',
            title: 'Cardio',
        },
    ];

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
                            {this.categories.map((x) => (
                                <option key={x.value} value={x.value}>
                                    {x.title}
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
                            {this.bodyParts.map((x) => (
                                <option key={x.value} value={x.value}>
                                    {x.title}
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

export default connect(null, { addExercise })(AddExerciseForm);
