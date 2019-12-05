import { createStore, combineReducers } from "redux";

import pageReducer from "./reducers/page";

const createReducer = (initialState, handlers) => (
  state = initialState,
  action
) => (handlers[action.type] && handlers[action.type](state, action)) || state;

const rootReducer = combineReducers({
  page: createReducer(pageReducer.initialState, pageReducer.handlers)
});

export default createStore(rootReducer, {});
