import axios from "axios";

export const READ_EVENTS = "READ_EVENTS";
export const CREATE_EVENT = "CREATE_EVENT";

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

export const postEvent = (values) => async (dispatch) => {
  const response = await axios.post(
    `${ROUTE_URL}/events${QUERYSTRING}`,
    values
  );
  // console.log(response);
  dispatch({ type: CREATE_EVENT, response: response });
};
