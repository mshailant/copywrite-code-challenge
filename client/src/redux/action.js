import axios from "axios";

export const SEND_TEXT = "SEND_TEXT";
export const GET_RESULTS = "GET_RESULTS";
export const REMOVE_RESULT = "REMOVE_RESULT";

const API_URL = "http://localhost:3001/";

export const sendText = (text) => {
  return async (dispatch) => {
    const response = await axios.get(`${API_URL}iecho?text=${text}`);
    console.log(response.data);
    dispatch({
      type: SEND_TEXT,
      payload: response.data,
    });
  };
};

export const getResults = (allText) => ({
  type: GET_RESULTS,
  payload: allText,
});

export const removeResult = (id) => ({
  type: REMOVE_RESULT,
  payload: id,
});
