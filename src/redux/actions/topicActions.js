import * as types from "./actionTypes";
import * as topicApi from "../../api/topicApi";

export function createTopic(topic) {
  return {type: types.CREATE_COURSE,topic};
}

export function loadTopicSuccess(topics) {
  return {type: types.LOAD_COURSES_SUCCESS,topics};
}

export function loadTopics() {
  return function(dispatch) {
    return topicApi
      .getTopics()
      .then(topics => {
        dispatch(loadTopicSuccess(topics));
      })
      .catch(error => {
        throw error;
      });
  };
}
