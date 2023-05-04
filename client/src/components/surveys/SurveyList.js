/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

const SurveyList = ({ fetchSurveys, surveys }) => {
  useEffect(() => {
    fetchSurveys();
  }, [fetchSurveys])

  const renderSurveys = surveys.reverse().map(survey => {
    return (
      <div className='card blue-grey darken-1' key={survey._id}>
        <div className="card-content white-text">
          <span className="card-title">{survey.title}</span>
          <p>{survey.body}</p>
          <p className='right'>Sent on: {new Date(survey.dateSent).toLocaleDateString()}</p>
        </div>
        <div className="card-action">
          <a>Yes: {survey.yes}</a>
          <a>No: {survey.no}</a>
        </div>
      </div>
    );
  });

  return (
    <div>
      {renderSurveys}
    </div>
  );
};

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);