import { SELECT_CATEGORY_PROJECT } from '../actions';

const INITIAL_STATE = {};

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
