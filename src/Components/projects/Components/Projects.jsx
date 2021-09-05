import React from 'react';

export default function Jobs(props) {
  const { classN, titleSection, describe } = props;
  return (
    <div className={ `project-card ${classN}` }>
      <div className="project-card-cover">
        <p className="project-card-title">{titleSection}</p>
        <p className="project-card-description">{describe}</p>
      </div>
    </div>
  );
}
