import React, { Component } from 'react';
import { push } from 'connected-react-router';
import * as actions from '../store/actions';
import { connect } from 'react-redux';
import { ProjectIcon} from '../svgs';

export class Projects extends Component {
  componentDidMount() {
    if (!this.props.projects) this.props.getProjects();
  }

  handleClick = item => {
    this.props.select(item);
    this.props.push(`/project/${item.id}`);
  };
  render() {
    const { projects } = this.props;
    if (!projects) return null;
    return (
      <>
        <div className="graybox-container">
          <h3>All Projects</h3>
        </div>

        <ul
          className="projects-list"
          style={ projects===null || projects.length === 0
              ? { minHeight: '20px' }
              : {}
          }
        >
          {projects === null || projects.length === 0 ? (
            <li>You don't have any project. Create one</li>
          ) : (
            ''
          )}
          {projects.map((item, index) => (
            <li key={index} onClick={() => this.handleClick(item)}>
              <ProjectIcon />
              <span>{item.attributes.name}</span>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.project.loading,
    projects: state.project.projects,
    error: state.project.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProjects: () => dispatch(actions.project.getAll()),
    select: param => dispatch(actions.project.select(param)),
    push: path => dispatch(push(path))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
