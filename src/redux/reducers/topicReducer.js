import * as types from "../actions/actionTypes";

export default function topicReducer(state=[],action) {
  switch(action.type) {
    case types.CREATE_COURSE:
      return [...state,{...action.topic}];
    default:
      return state;
  }
}
