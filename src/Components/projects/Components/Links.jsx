/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { FaReact, FaSass, DiJavascript } from 'react-icons/all';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import LogoTrybe from '../../../Images/Trybe-Logo.png';
import { setCategoryThunk } from '../../../redux/actions';

function Links({ selectProject }) {
  const history = useHistory();

  function selectSection(word) {
    const array = word.split(' ');
    if (word.includes('Trybe')) {
      return array[1];
    }
    return array[2];
  }

  const hadlerClick = ({ target }) => {
    let element;
    if (target.className === 'container-project-card') {
      element = target.querySelector('h2').innerText;
    } else {
      element = target.parentElement.querySelector('h2').innerText;
    }
    selectProject(selectSection(element));
    history.push(`/project/${selectSection(element)}`);
  };

  return (
    <>
      <div
        className="container-project-card"
        onClick={ hadlerClick }
      >
        <img src={ LogoTrybe } alt="" className="contrainer-project-image" />
        <h2 className="trybe-title">Projetos's Trybe</h2>
      </div>
      <div
        className="container-project-card"
        onClick={ hadlerClick }
      >
        <FaReact className="contrainer-project-image" />
        <h2 className="outhers-title">Projetos em React</h2>
      </div>
      <div
        className="container-project-card"
        onClick={ hadlerClick }
      >
        <FaSass className="contrainer-project-image" />
        <h2 className="outhers-title">Projetos em Sass</h2>
      </div>
      <div
        className="container-project-card"
        onClick={ hadlerClick }
      >
        <DiJavascript className="contrainer-project-image" />
        <h2 className="outhers-title">Projetos em JavaScript</h2>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  selectProject: (payload) => dispatch(setCategoryThunk(payload)),
});

export default connect(null, mapDispatchToProps)(Links);
