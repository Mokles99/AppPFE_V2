import axios from "axios";

import { contactConstants } from "./constantes";

////LISTER
export const listerContact = () => {
  return async (dispatch) => {
    dispatch({ type: contactConstants.GET_ALL_CONTACT_REQUEST });

    try {
      const res = await axios.get("http://localhost:8080/contact/lister");

      if (res.status == 200) {
        dispatch({
          type: contactConstants.GET_ALL_CONTACT_SUCCESS,
          payload: { contacts: res.data },
        });
      }
    } catch (error) {
      dispatch({
        type: contactConstants.GET_ALL_CONTACT_FAILURE,
        payload: { error: error.response },
      });
    }
  };
};

///DELETE
export const deleteContactAction = (id) => {
    return async (dispatch) => {
      dispatch({ type: contactConstants.DELETE_CONTACT_REQUEST });
      try {
        const res = await axios.get(`http://localhost:8080/contact/${id}/supprimer`);
        if (res.status == 200) {
          dispatch({
            type: contactConstants.DELETE_CONTACT_SUCCESS,
            payload: { message: res.data },
          });
        }
      } catch (error) {
        dispatch({
          type: contactConstants.DELETE_CONTACT_FAILURE,
          payload: { error: error.response },
        });
      }
    };
  };
  ///ADD
  export const addContactAction = (data) => {
    return async (dispatch) => {
      dispatch({ type: contactConstants.ADD_CONTACT_REQUEST });
  
      try {
        const res = await axios.post("http://localhost:8080/contact/ajouter", data);
        if (res.status == 200) {
          dispatch({
            type: contactConstants.ADD_CONTACT_SUCCESS,
            payload: { createContacts: res.data },
          });
        }
      } catch (error) {
        dispatch({
          type: contactConstants.ADD_CONTACT_FAILURE,
          payload: { error: error.response },
        });
      }
    };
  };

  ///edit

  export const editContactAction = (id, data) => {
    return async (dispatch) => {
  
      dispatch({ type: contactConstants.EDIT_CONTACT_REQUEST });
  
      try {
        const res = await axios.post(`http://localhost:8080/contact/${id}/modifier`, data);
        if (res.status == 200) {
          dispatch({
  
            type: contactConstants.EDIT_CONTACT_SUCCESS,
            payload: { message :res.data },
          });
        }
      } catch (error) {
  
        dispatch({
          type: contactConstants.EDIT_CONTACT_FAILURE,
          payload: { error: error.response },
        });
      }
    };
  };