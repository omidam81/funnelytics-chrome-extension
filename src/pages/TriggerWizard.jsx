import React, { useState } from 'react';
import StepHeader from '../components/StepHeader';
import StepOne from './triggerStep/StepOne';
import StepTwo from './triggerStep/StepTwo';
import StepThree from './triggerStep/StepThree';


function TriggerWizard({ onSubmit, onDelete }) {
  const [page,setPage]=useState(1);
  return (
    <div className="create-new-trigger">
      <StepHeader step={3} active={page} />
      {page === 1 && (
        <StepOne onSubmit={() => setPage(page + 1)} onDelete={onDelete} />
      )}
      {page === 2 && (
        <StepTwo
          previousPage={() => setPage(page - 1)}
          onSubmit={() => setPage(page + 1)}
        />
      )}
      {page === 3 && (
        <StepThree
          previousPage={() => setPage(page - 1)}
          onSubmit={onSubmit}
        />
      )}
    </div>
  );
}

export default TriggerWizard;
