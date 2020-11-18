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
      // switch (false) {
      //   case action.payload.catalog:
      //     store.catalog = null;
      //   case action.payload.gallery:
      //     console.log("!!!!");
      //     store.gallery = null;
      //   case action.payload.news:
      //     store.news = null;
      //   case action.payload.projects:
      //     store.projects = null;
      // }
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
