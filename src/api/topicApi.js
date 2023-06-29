import {handleResponse,handleError} from "./apiUtils";
const baseUrl=process.env.API_URL+"/topics/";

export function getTopics() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveTopic(topic) {
  return fetch(baseUrl+(topic.id||""),{
    method: topic.id? "PUT":"POST", // POST for create, PUT to update when id already exists.
    headers: {"content-type": "application/json"},
    body: JSON.stringify(topic)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteTopic(topicId) {
  return fetch(baseUrl+topicId,{method: "DELETE"})
    .then(handleResponse)
    .catch(handleError);
}
