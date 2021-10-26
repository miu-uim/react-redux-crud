import axios from "axios";

export const READ_EVENTS = "READ_EVENTS";
export const READ_EVENT = "READ_EVENT";
export const CREATE_EVENT = "CREATE_EVENT";
export const UPDATE_EVENT = "UPDATE_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";

const ROUTE_URL = "https://udemy-utils.herokuapp.com/api/v1";
const QUERYSTRING = "?token=token123";

// thunk入れないとそのままのオブジェクトを返す
// export const readEvents = () => ({
//   type: READ_EVENTS,
// });

// thunk入れたことで関数を返せるように
export const readEvents = () => async (dispatch) => {
  const response = await axios.get(`${ROUTE_URL}/events${QUERYSTRING}`);
  // console.log(response);
  dispatch({ type: READ_EVENTS, response: response });
};

export const putEvent = (values) => async (dispatch) => {
  const response = await axios.put(
    `${ROUTE_URL}/events/${values.id}${QUERYSTRING}`,
    values
  );
  dispatch({ type: UPDATE_EVENT, response });
};

export const postEvent = (values) => async (dispatch) => {
  const response = await axios.post(
    `${ROUTE_URL}/events${QUERYSTRING}`,
    values
  );
  dispatch({ type: CREATE_EVENT, response: response });
};

export const getEvent = (id) => async (dispatch) => {
  const response = await axios.get(`${ROUTE_URL}/events/${id}${QUERYSTRING}`);
  dispatch({ type: READ_EVENT, response });
};
export const deleteEvent = (id) => async (dispatch) => {
  await axios.delete(`${ROUTE_URL}/events/${id}${QUERYSTRING}`);
  dispatch({ type: DELETE_EVENT, id });
};
