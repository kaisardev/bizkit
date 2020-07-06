import {
  AUTH_ERROR,
  AUTH_SUCCESS,
  FETCH_COMPANIES_SUCCESS,
  OPEN_MODAL,
  CLOSE_MODAL,
  ADD_COMPANY,
  GET_FULL_COMPANY,
  INPUT_CHANGE,
} from "./actionTypes";

const initialState = {
  isAuthenticated: false,
  isModal: false,
  companies: [],
  error: null,
  currentCompany: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return { ...state, isAuthenticated: true, error: null };
    case AUTH_ERROR:
      return { ...state, error: action.error, isAuthenticated: false };
    case FETCH_COMPANIES_SUCCESS:
      return { ...state, companies: action.data.results };
    case OPEN_MODAL:
      return { ...state, isModal: true };
    case CLOSE_MODAL:
      return { ...state, isModal: false };
    case ADD_COMPANY:
      return { ...state, isModal: false };
    case GET_FULL_COMPANY:
      return { ...state, currentCompany: action.data };
    default:
      return state;
  }
};

export default reducer;
