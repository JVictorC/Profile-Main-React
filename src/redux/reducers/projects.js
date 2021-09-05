import { SELECT_CATEGORY_PROJECT } from '../actions';
import projectsArray from '../../Services/DataProject';

const INITIAL_STATE = projectsArray;

const projects = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
  case SELECT_CATEGORY_PROJECT:
    return state;
  default:
    return state;
  }
};

export default projects;
