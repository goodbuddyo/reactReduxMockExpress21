import {combineReducers} from "redux";
import topics from "./topicReducer";
import authors from "./authorReducer";

const rootReducer=combineReducers({
  topics,
  authors
});

export default rootReducer;
