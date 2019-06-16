import React, { useState } from 'react';
import * as actions from '../store/actions';
import { connect } from 'react-redux';
import StepHeader from '../components/StepHeader';
import StepOne from './triggerStep/StepOne';
import StepTwo from './triggerStep/StepTwo';
import StepThree from './triggerStep/StepThree';


function TriggerWizard({ onSubmit, onDelete,page,nextPage,pervPage }) {
  //const [page,setPage]=useState(1);
  return (
    <div className="create-new-trigger">
      <StepHeader step={3} active={page} />
      {page === 1 && <StepOne onSubmit={nextPage} onDelete={onDelete} />}
      {page === 2 && <StepTwo previousPage={pervPage} onSubmit={nextPage} />}
      {page === 3 && (
        <StepThree previousPage={pervPage} onSubmit={onSubmit} />
      )}
    </div>
  );
}

//export default TriggerWizard;

const mapStateToProps = state => {
  return {
    initialValues: state.projectEvent?state.projectEvent.event:{
      selector:''
    },
    page: state.projectEvent.page
  };
};

const mapDispatchToProps = dispatch => {
  return {
    nextPage: () => dispatch(actions.projectEvent.nextPage()),
    pervPage: () => dispatch(actions.projectEvent.pervPage()),
    //push: path => dispatch(push(path))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( TriggerWizard
);
