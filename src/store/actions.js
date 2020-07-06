import axios from "../axios-bizkit";
import {
  AUTH_SUCCESS,
  AUTH_ERROR,
  FETCH_COMPANIES_SUCCESS,
  FETCH_COMPANIES_ERROR,
  OPEN_MODAL,
  CLOSE_MODAL,
  ADD_COMPANY,
  GET_FULL_COMPANY,
  LOGOUT,
} from "./actionTypes";

export const loginUser = (user) => {
  return (dispatch) => {
    return axios
      .post("/token/", user)
      .then((response) => {
        localStorage.setItem("tokenData", JSON.stringify(response.data));
        dispatch({ type: AUTH_SUCCESS });
      })
      .catch((error) => {
        dispatch({ type: AUTH_ERROR, error });
      });
  };
};

export const checkAuth = (history) => {
  let token = JSON.parse(localStorage.getItem("tokenData"));

  return (dispatch) => {
    if (token) {
      token = { token: token.access };

      return axios
        .post("/token/verify/", token)
        .then(() => {
          dispatch({ type: AUTH_SUCCESS });
          dispatch(fetchCompanies());
        })
        .catch((error) => {
          dispatch({ type: AUTH_ERROR, error });
        });
    }

    return history.push("/");
  };
};

export const fetchCompanies = () => {
  return (dispatch) => {
    axios
      .get("/companies/")
      .then((response) => {
        dispatch({ type: FETCH_COMPANIES_SUCCESS, data: response.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_COMPANIES_ERROR, error });
      });
  };
};

export const deleteCompany = (id) => {
  return (dispatch) => {
    axios
      .delete(`/companies/${id}/`)
      .then((response) => {
        console.log(response);
        dispatch(fetchCompanies());
      })
      .catch((error) => {
        console.log("Couldn't delete");
      });
  };
};

export const addCompany = (company) => {
  return (dispatch) => {
    console.log(company);
    axios
      .post(`/companies/`, company)
      .then((response) => {
        dispatch({ type: ADD_COMPANY });
        dispatch(fetchCompanies());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const openModal = () => {
  return { type: OPEN_MODAL };
};

export const closeModal = () => {
  return { type: CLOSE_MODAL };
};

export const getFullCompany = (id) => {
  return (dispatch) => {
    return axios
      .get(`/companies/${id}/`)
      .then((response) => {
        dispatch({ type: GET_FULL_COMPANY, data: response.data });
      })
      .catch();
  };
};

export const editFullCompany = (id, company, history) => {
  return (dispatch) => {
    axios
      .put(`/companies/${id}/`, company)
      .then((response) => {
        console.log(response);
        history.push("/main");
      })
      .catch();
  };
};

export const logout = () => {
  localStorage.removeItem("tokenData");
  return { type: LOGOUT };
};
