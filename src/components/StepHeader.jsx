import React from 'react';

function StepHeader({ step = 3, active = 1 }) {
  const steps = Array.from(Array(step).keys()).map(c => c + 1);
  return (
    <div className="steps">
      <div className="line-1" />
      <div className="line-2" />
      {steps.map((p, k) => {
        let classes = active === p ? `step step-${p} blue` : `step step-${p}`;
        return (
          <div key={k} className={classes}>
            {p}
          </div>
        );
      })}
    </div>
  );
}

export default StepHeader;
