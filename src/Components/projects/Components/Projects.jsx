import React from 'react';
import PropTypes from 'prop-types';

export default function Project(props) {
  const { classN, titleSection, describe, link } = props;
  return (
    <div className={ `project-card ${classN}` }>
      <div className="project-card-cover">
        <p className="project-card-title">{titleSection}</p>
        <p className="project-card-description">{describe}</p>
        <a
          href={ link }
          target="_blank"
          rel="noreferrer"
          className="btn btn-images"
        >
          Ver Projeto
        </a>
      </div>
    </div>
  );
}

Project.propTypes = {
  classN: PropTypes.string.isRequired,
  titleSection: PropTypes.string.isRequired,
  describe: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
