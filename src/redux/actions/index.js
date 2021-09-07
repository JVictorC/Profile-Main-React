import projects from '../../Services/DataProject';

// Types

export const SELECT_CATEGORY_PROJECT = 'SELECT_CATEGORY_PROJECT';

// Actions

const setCategory = (payload) => ({
  type: SELECT_CATEGORY_PROJECT,
  payload,
});

// Thunk

export const setCategoryThunk = (payload) => (dispatch) => {
  console.log(payload);
  const newArray = projects.map((project) => {
    const arrayFilter = project.projectsSection
      .filter(({ technologies }) => (
        technologies
          ? technologies.includes(payload.toUpperCase())
          : false
      ));
    if (arrayFilter.length !== 0) { return arrayFilter; }
  }).filter((value) => value !== undefined);

  if (payload === 'Trybe') {
    dispatch(setCategory(projects));
  } else {
    dispatch(setCategory(newArray));
  }
};
