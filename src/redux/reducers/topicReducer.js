import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function topicReducer(state=initialState.topics,action) {
  switch(action.type) {
    case types.CREATE_COURSE:
      return [...state,{...action.topic}];
    case types.LOAD_COURSES_SUCCESS:
      return action.topics;
    default:
      return state;
  }
}
