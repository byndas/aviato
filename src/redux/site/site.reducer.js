import { UPDATE_REDUX_WITH_FIRE_DB } from "./site.actions";

const INITAL_STATE = {
  catalog: null,
  gallery: null,
  news: null,
  projects: null
};

export const siteReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_REDUX_WITH_FIRE_DB:
      const base = action.payload;

      switch ("undefined") {
        case typeof base.catalog:
          base.catalog = null;
        case typeof base.gallery:
          base.gallery = null;
        case typeof base.news:
          base.news = null;
        case typeof base.projects:
          base.projects = null;
      }
      return Object.assign({}, state, base);
    default:
      return state;
  }
};
