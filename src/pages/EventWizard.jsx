import React, { useState } from 'react';
import StepHeader from '../components/StepHeader';
import StepOne from './eventStep/StepOne';
import StepTwo from './eventStep/StepTwo';
import StepThree from './eventStep/StepThree';


function EventWizard({ onSubmit, onDelete }) {
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

export default EventWizard
