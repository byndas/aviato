import { UPDATE_REDUX_WITH_FIRE_DB } from "./site.actions";

const INITAL_STATE = {
  calendar: null,
  catalog: null,
  gallery: null,
  news: null,
  projects: null
};

export const siteReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_REDUX_WITH_FIRE_DB:
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
};
