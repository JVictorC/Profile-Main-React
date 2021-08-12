import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LinkProject extends Component {
  render() {
    const { project } = this.props;
    let component = (
      <a
        href={ project.link }
        className="linksProject"
        target="_blank"
        rel="noreferrer"
      >
        {project.name}
      </a>
    );
    if (project.name === undefined) {
      component = (
        <p className="warning-project">
          Infelizmente ainda não cheguei nessa Section 😟
        </p>
      );
    }
    return (
      component
    );
  }
}

export default LinkProject;

LinkProject.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};
