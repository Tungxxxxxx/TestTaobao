import { createStore, combineReducers } from "redux";
import { setParamsReducer } from "../reducers/paramReducers";
import middleware from "../middleware/Middleware";

const reducers = combineReducers({
  params: setParamsReducer,
});
const store = createStore(reducers, middleware);
export default store;
