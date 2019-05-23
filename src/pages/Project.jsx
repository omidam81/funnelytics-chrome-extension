import React, { Component } from 'react';
import * as actions from '../store/actions';
import { push } from 'connected-react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {ViewIcon,EditIcon, NewTriggerIcon,ProjectIcon} from '../svgs';
import TriggerItem from '../components/TriggerItem';
import ProjectInfo from '../components/ProjectInfo';
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
    this.props.push(`/trigger/${row.id}`);
  };
  handleEdit = row => {
    if (!row) return;
    this.props.select(row);
    this.props.push(`/trigger-edit/${row.id}`);
  };
  handleSort = value => {
    this.props.sort(value);
  };
  handleFilter = value => {
    this.props.filter(value);
  };
  
  render() {
    const { result } = this.props;
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
                    <TriggerItem event={p} />
                    <div className="view-btn">
                      <ViewIcon onClick={() => this.handleView(p)} />
                    </div>
                    <div className="edit-btn">
                      <EditIcon onClick={() => this.handleEdit(p)} />
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="create-trigger-btn-container">
          <Link to='/trigger'>
            <button className="create-trigger-btn">
              <NewTriggerIcon />
              Create New Trigger
            </button>
          </Link>
        </div>
        <ProjectInfo id={this.props.match.params.id}/>
        
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
