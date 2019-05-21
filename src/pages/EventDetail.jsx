import React from 'react';
import { push } from 'connected-react-router';
import * as actions from '../store/actions';
import { connect } from 'react-redux';
import { EditIcon } from '../svgs';
import TriggerItem from '../components/TriggerItem';
import ProjectInfo from '../components/ProjectInfo';
import Form from './Form';

export class EventDetail extends Form {
  
  handleRemove = () => {
    this.props.remove(this.props.event.id);
    this.props.push(`/project/${this.props.project.id}`);
  };
  render() {
    const { event, project } = this.props;
    if (!event) return null;
    return (
      <>
        <div className="trigger-details">
          <TriggerItem event={event} />
        </div>
        <div className="graybox-container">
          <h3>Originally Created On</h3>
        </div>
        <div className="white-box-container">
          <h3>Funnelytics Register Page (900)</h3>
          <a href="">{event.attributes.url}</a>
          <div className="edit-btn">
            <EditIcon />
          </div>
        </div>
        <button className="delete-trigger-btn" onClick={this.handleRemove}>
          Delete Trigger
        </button>
        <ProjectInfo id={project.id} />
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    event: state.projectEvent.event,
    project: state.project.project
  };
};

const mapDispatchToProps = dispatch => {
  return {
    remove: param => dispatch(actions.projectEvent.remove(param)),
    push: path => dispatch(push(path))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetail);
