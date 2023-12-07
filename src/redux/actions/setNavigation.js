import { SET_NAVIGATION } from "../../constants/Actions";
export const setNavigation = (navigation) => {
  return (dispatch) => {
    dispatch({ type: SET_NAVIGATION, payload: navigation });
  };
};
