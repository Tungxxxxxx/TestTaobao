import { SET_NAVIGATION } from "../../constants/Actions";
const initState = {
  navigation: null,
};
export const setParamsReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_NAVIGATION:
    default:
      return state;
  }
};
