import { FETCH_LOAD } from "../actions/axiosAction";
import { FETCH_START } from "../actions/axiosAction";
import { FETCH_FAILD } from "../actions/axiosAction";

const initiallstate = {
  data: [],
  isloading: false,
  error: null
};

export const rootReducer = (state = initiallstate, action) => {
  switch (action.type) {
    case FETCH_LOAD:
      return {
        ...state,
        isloading: true,
        error: null
      };
    case FETCH_START:
      return { ...state, data: action.payload, isloading: false, error: null };
    case FETCH_FAILD:
      return {
        data: [],
        isloading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
