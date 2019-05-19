import React, { Component } from 'react';
import { push } from 'connected-react-router';
import Header from '../components/Header';
import * as actions from '../store/actions';
import { connect } from 'react-redux';
import {
  ButtonClickIcon,
  ViewIcon,
  EditIcon,
  FormSubmitIcon,
  VideoPlayIcon,
  PurchaseIcon
} from '../svgs';
import Form from './Form';

export class EventDetail extends Form {
  getLabel = type => {
    return type === 'click'
      ? 'Button Click'
      : type === 'submit'
      ? 'Form Submit'
      : type === 'play'
      ? 'Video Play'
      : type === 'purchase'
      ? 'Purchase'
      : '';
  };
  getClasses = type => {
    return type === 'click'
      ? 'button-click'
      : type === 'submit'
      ? 'form-submit'
      : type === 'play'
      ? 'video-play'
      : type === 'purchase'
      ? 'purchase'
      : '';
  };
  renderButton = type => {
    const classes = `icon ${this.getClasses(type)}`;
    return (
      <div className={classes}>
        {type === 'click' ? (
          <ButtonClickIcon />
        ) : type === 'submit' ? (
          <FormSubmitIcon />
        ) : type === 'play' ? (
          <VideoPlayIcon />
        ) : type === 'purchase' ? (
          <PurchaseIcon />
        ) : (
          ''
        )}
      </div>
    );
  };
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
          {this.renderButton(event.attributes.trigger_type)}
          <div className="item-description">
            <h3 className="item-title">{event.attributes.label}</h3>
            <span className={`item-type ${event.attributes.trigger_type}`}>
              {this.getLabel(event.attributes.trigger_type)}
            </span>
            <span className="item-id">{`ID: ${event.id.split('-')[0]}`}</span>
          </div>
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
        <div className="project-info">
          <span className="project-name">
            <b>Project:</b> Funnelytics
          </span>
          <span className="project-id">
            <b>ID:</b> {project.id}
          </span>
        </div>
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
