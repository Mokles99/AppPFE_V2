import axios from "axios";

import { formulaireeventConstants } from "./constantes";

////LISTER
export const listerEvent = () => {
  return async (dispatch) => {
    dispatch({ type: formulaireeventConstants.GET_ALL_FORMULAIREEVENT_REQUEST });

    try {
      const res = await axios.get("http://localhost:8080/formulaireevent/lister");

      if (res.status == 200) {
        dispatch({
          type: formulaireeventConstants.GET_ALL_FORMULAIREEVENT_SUCCESS,
          payload: { formulaireevents: res.data },
        });
      }
    } catch (error) {
      dispatch({
        type: formulaireeventConstants.GET_ALL_FORMULAIREEVENT_FAILURE,
        payload: { error: error.response },
      });
    }
  };
};

///DELETE
export const deleteEventAction = (id) => {
    return async (dispatch) => {
      dispatch({ type: formulaireeventConstants.DELETE_FORMULAIREEVENT_REQUEST });
      try {
        const res = await axios.get(`http://localhost:8080/formulaireevent/${id}/supprimer`);
        if (res.status == 200) {
          dispatch({
            type: formulaireeventConstants.DELETE_FORMULAIREEVENT_SUCCESS,
            payload: { message: res.data },
          });
        }
      } catch (error) {
        dispatch({
          type: formulaireeventConstants.DELETE_FORMULAIREEVENT_FAILURE,
          payload: { error: error.response },
        });
      }
    };
  };
  ///ADD
  export const addEventAction = (data) => {
    return async (dispatch) => {
      dispatch({ type: formulaireeventConstants.ADD_FORMULAIREEVENT_REQUEST });
  
      try {
        const res = await axios.post("http://localhost:8080/formulaireevent/ajouter", data);
        if (res.status == 200) {
          dispatch({
            type: formulaireeventConstants.ADD_FORMULAIREEVENT_SUCCESS,
            payload: { createEvents: res.data },
          });
        }
      } catch (error) {
        dispatch({
          type: formulaireeventConstants.ADD_FORMULAIREEVENT_FAILURE,
          payload: { error: error.response },
        });
      }
    };
  };

  ///edit

  export const editEventAction = (id, data) => {
    return async (dispatch) => {
  
      dispatch({ type: formulaireeventConstants.EDIT_FORMULAIREEVENT_REQUEST });
  
      try {
        const res = await axios.post(`http://localhost:8080/formulaireevent/${id}/modifier`, data);
        if (res.status == 200) {
          dispatch({
  
            type: formulaireeventConstants.EDIT_FORMULAIREEVENT_SUCCESS,
            payload: { message :res.data },
          });
        }
      } catch (error) {
  
        dispatch({
          type: formulaireeventConstants.EDIT_FORMULAIREEVENT_FAILURE,
          payload: { error: error.response },
        });
      }
    };
  };