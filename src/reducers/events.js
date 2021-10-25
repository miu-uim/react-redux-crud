import _ from "lodash";
import { READ_EVENTS } from "../actions";

/* eslint-disable */
export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      // [
      //  {"id":1,"token":"token123","title":"Let's have an event 1!","body":"This is the body for event 1.","created_at":"2021-10-25T02:04:17.190Z","updated_at":"2021-10-25T02:04:17.190Z"},
      //  {"id":2, "token": "token123", "title": "Let's have an event 2!", "body": "This is the body for event 2.", "created_at": "2021-10-25T02:04:17.196Z", "updated_at": "2021-10-25T02:04:17.196Z" }
      // ]
      // 上（action.response.data）より下のほうが使いやすい
      // {
      //  1:{"id":1,"token":"token123","title":"Let's have an event 1!","body":"This is the body for event 1.","created_at":"2021-10-25T02:04:17.190Z","updated_at":"2021-10-25T02:04:17.190Z"},
      //  2:{"id":2, "token": "token123", "title": "Let's have an event 2!", "body": "This is the body for event 2.", "created_at": "2021-10-25T02:04:17.196Z", "updated_at": "2021-10-25T02:04:17.196Z" }
      // }
      // console.log(action.response.data);
      return _.mapKeys(action.response.data, "id");
    default:
      return events;
  }
};
