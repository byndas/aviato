export const UPDATE_REDUX_WITH_FIRE_DB = "FIREBASE_DATA";

export const updateReduxWithFireDb = data => {
  return {
    type: UPDATE_REDUX_WITH_FIRE_DB,
    payload: data
  };
};
