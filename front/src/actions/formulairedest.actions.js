import axios from "axios";

import { formulairedestConstants } from "./constantes";

////LISTER
export const listerDest = () => {
  return async (dispatch) => {
    dispatch({ type: formulairedestConstants.GET_ALL_FORMULAIREDEST_REQUEST });

    try {
      const res = await axios.get("http://localhost:8080/formulairedest/lister");

      if (res.status == 200) {
        dispatch({
          type: formulairedestConstants.GET_ALL_FORMULAIREDEST_SUCCESS,
          payload: { formulairedests: res.data },
        });
      }
    } catch (error) {
      dispatch({
        type: formulairedestConstants.GET_ALL_FORMULAIREDEST_FAILURE,
        payload: { error: error.response },
      });
    }
  };
};

///DELETE
export const deleteDestAction = (id) => {
    return async (dispatch) => {
      dispatch({ type: formulairedestConstants.DELETE_FORMULAIREDEST_REQUEST });
      try {
        const res = await axios.get(`http://localhost:8080/formulairedest/${id}/supprimer`);
        if (res.status == 200) {
          dispatch({
            type: formulairedestConstants.DELETE_FORMULAIREDEST_SUCCESS,
            payload: { message: res.data },
          });
        }
      } catch (error) {
        dispatch({
          type: formulairedestConstants.DELETE_FORMULAIREDEST_FAILURE,
          payload: { error: error.response },
        });
      }
    };
  };
  ///ADD
  export const addDestAction = (data) => {
    return async (dispatch) => {
      dispatch({ type: formulairedestConstants.ADD_FORMULAIREDEST_REQUEST });
  
      try {
        const res = await axios.post("http://localhost:8080/formulairedest/ajouter", data);
        if (res.status == 200) {
          dispatch({
            type: formulairedestConstants.ADD_FORMULAIREDEST_SUCCESS,
            payload: { createDests: res.data },
          });
        }
      } catch (error) {
        dispatch({
          type: formulairedestConstants.ADD_FORMULAIREDEST_FAILURE,
          payload: { error: error.response },
        });
      }
    };
  };

  ///edit

  export const editDestAction = (id, data) => {
    return async (dispatch) => {
  
      dispatch({ type: formulairedestConstants.EDIT_FORMULAIREDEST_REQUEST });
  
      try {
        const res = await axios.post(`http://localhost:8080/formulairedest/${id}/modifier`, data);
        if (res.status == 200) {
          dispatch({
  
            type: formulairedestConstants.EDIT_FORMULAIREDEST_SUCCESS,
            payload: { message :res.data },
          });
        }
      } catch (error) {
  
        dispatch({
          type: formulairedestConstants.EDIT_FORMULAIREDEST_FAILURE,
          payload: { error: error.response },
        });
      }
    };
  };