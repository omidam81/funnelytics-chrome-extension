import React, { Component } from 'react';
import * as actions from '../store/actions';
import { push } from 'connected-react-router';
import { Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';
import {
  ButtonClickIcon,
  ViewIcon,
  EditIcon,
  FormSubmitIcon,
  VideoPlayIcon,
  PurchaseIcon,
  NewTriggerIcon,
  ProjectIcon
} from '../svgs';
import SortMenu from '../components/SortMenu';
import FilterMenu from '../components/FilterMenu';

export class Project extends Component {
  
  componentDidMount() {
    if (!this.props.events) {
      this.props.getByFilter('project', this.props.match.params.id);
    }
  }
  handleView = row => {
    if (!row) return;
    this.props.select(row);
    this.props.push(`/event/${row.id}`);
  };
  handleSort = value => {
    this.props.sort(value);
  };
  handleFilter = value => {
    this.props.filter(value);
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
  render() {
    const { result } = this.props;
    //console.log('events', events);
    if (!result) return null;

    let elements = <li> You don't have any events on this project. </li>;

    if (result.length > 0)
      elements = result.map((item, index) => (
        <li to={'/project/' + item.id} key={index}>
          <ProjectIcon />
          <span>{item.attributes.name}</span>
        </li>
      ));
    
    return (
      <>
        <div className="triggers-listing">
          <div className="listing-options">
            <SortMenu onClick={this.handleSort} />
            <FilterMenu onClick={this.handleFilter} />
          </div>
          <ul className="items-listing-ul">
            {result.length > 0 &&
              result.map((p, k) => {
                return (
                  <li className="listing-item" key={k}>
                    {this.renderButton(p.attributes.trigger_type)}

                    <div className="item-description">
                      <h3 className="item-title">{p.attributes.label}</h3>
                      <span
                        className={`item-type ${p.attributes.trigger_type}`}
                      >
                        {this.getLabel(p.attributes.trigger_type)}
                      </span>
                      <span className="item-id">{`ID: ${
                        p.id.split('-')[0]
                      }`}</span>
                    </div>
                    <div className="view-btn">
                      <ViewIcon onClick={() => this.handleView(p)} />
                    </div>
                    <div className="edit-btn">
                      <EditIcon />
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="create-trigger-btn-container">
          <Link to={`/new-event`}>
            <button className="create-trigger-btn">
              <NewTriggerIcon />
              Create New Trigger
            </button>
          </Link>
        </div>
        <div className="project-info">
          <span className="project-name">
            <b>Project:</b> Funnelytics
          </span>
          <span className="project-id">
            <b>ID:</b> {this.props.match.params.id}
          </span>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.projectEvent.loading,
    result: state.projectEvent.result,
    project: state.project.project,
    error: state.project.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getByFilter: (filter, value) =>
      dispatch(actions.projectEvent.getByFilter(filter, value)),
    select: param => dispatch(actions.projectEvent.select(param)),
    filter: param => dispatch(actions.projectEvent.filter(param)),
    sort: param => dispatch(actions.projectEvent.sort(param)),
    push: path => dispatch(push(path))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project);
