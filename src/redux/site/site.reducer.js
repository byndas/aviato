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

      if (typeof base.gallery === "undefined") {
        console.log("GALLERY", base);
        base.gallery = null;
      }
      return Object.assign({}, state, base);
    default:
      return state;
  }
};
