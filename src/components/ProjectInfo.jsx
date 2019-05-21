import React from 'react'

function ProjectInfo({id}) {
  return (
    <div className="project-info">
      <span className="project-name">
        <b>Project:</b> Funnelytics
      </span>
      <span className="project-id">
        <b>ID:</b> {id}
      </span>
    </div>
  );
}

export default ProjectInfo
