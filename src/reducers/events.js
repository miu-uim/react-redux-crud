import _ from "lodash";
import {
  CREATE_EVENT,
  READ_EVENTS,
  READ_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
} from "../actions";

/* eslint-disable */
export default (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data;
      console.log(action.response.data);
      // id: 3, token: 'token123', title: "Let's have an event 3!", body: 'This is the body for event 3.'}
      return { ...events, [data.id]: data };
    case READ_EVENTS:
      return _.mapKeys(action.response.data, "id");
    case DELETE_EVENT:
      delete events[action.id];
      return { ...events };

    default:
      return events;
  }
};
