import React from 'react';

const SurveyField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div className='input-field'>
      <input {...input} className='validate' id={label} />
      <label htmlFor={label} className='active'>{label}</label>
      {touched && error ? <span className="helper-text red-text" style={{ marginBottom: '30px' }} data-error="wrong" data-success="right">{error}</span> : null
      }
    </div >
  );
};

export default SurveyField;