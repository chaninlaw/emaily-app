import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../util/validateEmails';
import formFields from './formFields';

const SurveyForm = ({ onSurveySubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSurveySubmit();
  }

  const renderFields = formFields.map(({ label, name }) =>
    <Field
      key={name}
      component={SurveyField}
      type='text'
      label={label}
      name={name}
    />
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {renderFields}
        <Link
          to="/surveys"
          className='red btn-flat left white-text'
          type='submit'
        >
          Cancel
        </Link>
        <button
          className='teal btn-flat right white-text'
          type='submit'
        >
          Next
          <i className='material-icons right'>done</i>
        </button>
      </form>
    </div>
  );
};

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
}


export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);