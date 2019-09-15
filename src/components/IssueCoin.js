import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class IssueCoin extends Component {
    
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                {field.meta.error}
            </div>
        );
    }

    onSubmit(values) {
        console.log(values);
    }

    render() {

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Type of Coin"
                    name="coin"
                    component={this.renderField}
                />
                <Field
                    label="Issue To:"
                    name="issue"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
           </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.coin) {
        errors.coin = "Select a coin!";
    }
    if (!values.issue) {
        errors.issue = "Enter address to issue to.";
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'IssueCoinForm'
})(IssueCoin);