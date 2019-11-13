import axios from "axios";

export const FETCH_LOAD = "FETCH_LOAD";
export const FETCH_START = "FETCH_START";
export const FETCH_FAILD = "FETCH_FAILD";

export const axiosAction = newList => dispatch => {
  dispatch({ type: FETCH_LOAD });
  axios
    .get(
      `https://pixabay.com/api/?key=14202801-ec48b40c3ad9171dbafcec95c&q=${newList}&image_type=photo`
    )
    .then(response => dispatch({ type: FETCH_START, payload: response }))
    .catch(error => console.log(error));
};
