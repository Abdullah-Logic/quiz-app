import { combineReducers, configureStore } from "@reduxjs/toolkit";

/** call reducers */
import questionReducer from "./QuestionReducer";
import resultReducer from "./ResultReducer";

const rootReducer = combineReducers({
  questions: questionReducer,
  result: resultReducer,
});

/** create store with reducer */
export default configureStore({ reducer: rootReducer });
