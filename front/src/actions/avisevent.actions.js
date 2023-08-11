import axios from "axios";

import { aviseventConstants } from "./constantes";

////LISTER
export const listerAvisevent = () => {
  return async (dispatch) => {
    dispatch({ type: aviseventConstants.GET_ALL_AVISEVENT_REQUEST });

    try {
      const res = await axios.get("http://localhost:8080/avisevent/lister");

      if (res.status == 200) {
        dispatch({
          type: aviseventConstants.GET_ALL_AVISEVENT_SUCCESS,
          payload: { avisevents: res.data },
        });
      }
    } catch (error) {
      dispatch({
        type: aviseventConstants.GET_ALL_AVISEVENT_FAILURE,
        payload: { error: error.response },
      });
    }
  };
};

///DELETE
export const deleteAviseventAction = (id) => {
    return async (dispatch) => {
      dispatch({ type: aviseventConstants.DELETE_AVISEVENT_REQUEST });
      try {
        const res = await axios.get(`http://localhost:8080/avisevent/${id}/supprimer`);
        if (res.status == 200) {
          dispatch({
            type: aviseventConstants.DELETE_AVISEVENT_SUCCESS,
            payload: { message: res.data },
          });
        }
      } catch (error) {
        dispatch({
          type: aviseventConstants.DELETE_AVISEVENT_FAILURE,
          payload: { error: error.response },
        });
      }
    };
  };
  ///ADD
  export const addAviseventAction = (data) => {
    return async (dispatch) => {
      dispatch({ type: aviseventConstants.ADD_AVISEVENT_REQUEST });
  
      try {
        const res = await axios.post("http://localhost:8080/avisevent/ajouter", data);
        if (res.status == 200) {
          dispatch({
            type: aviseventConstants.ADD_AVISEVENT_SUCCESS,
            payload: { createAvisevents: res.data },
          });
        }
      } catch (error) {
        dispatch({
          type: aviseventConstants.ADD_AVISEVENT_FAILURE,
          payload: { error: error.response },
        });
      }
    };
  };

  ///edit

  export const editAviseventAction = (id, data) => {
    return async (dispatch) => {
  
      dispatch({ type: aviseventConstants.EDIT_AVISEVENT_REQUEST });
  
      try {
        const res = await axios.post(`http://localhost:8080/avisevent/${id}/modifier`, data);
        if (res.status == 200) {
          dispatch({
  
            type: aviseventConstants.EDIT_AVISEVENT_SUCCESS,
            payload: { message :res.data },
          });
        }
      } catch (error) {
  
        dispatch({
          type: aviseventConstants.EDIT_AVISEVENT_FAILURE,
          payload: { error: error.response },
        });
      }
    };
  };