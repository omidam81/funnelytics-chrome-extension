import React, { Component } from 'react';
import Header from '../components/Header';
import StepHeader from '../components/StepHeader';
import StepOne from './eventStep/StepOne';
import StepTwo from './eventStep/StepTwo';
import StepThree from './eventStep/StepThree';


class EventWizard extends Component {
  state = {
    page: 1
  };
  
  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  previousPage = () => {
    this.setState({ page: this.state.page - 1 });
  };

  render() {
    const { onSubmit, onDelete } = this.props;
    const { page } = this.state;
    return (
      <div className="create-new-trigger">
        <StepHeader step={3} active={this.state.page} />
        {page === 1 && (
          <StepOne onSubmit={this.nextPage} onDelete={onDelete} />
        )}
        {page === 2 && (
          <StepTwo
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 3 && (
          <StepThree previousPage={this.previousPage} onSubmit={onSubmit} />
        )}
      </div>
    );
  }
}


export default EventWizard;
