import {
    FETCH_BARS_REQUEST,
    FETCH_BARS_SUCCESS,
    FETCH_BARS_FAIL,
    ADD_BAR_REQUEST,
    ADD_BAR_SUCCESS,
    ADD_BAR_FAIL,
    EDIT_BAR_REQUEST,
    EDIT_BAR_SUCCESS,
    EDIT_BAR_FAIL,
    DELETE_BAR_REQUEST,
    DELETE_BAR_SUCCESS,
    DELETE_BAR_FAIL,
  } from '../actions/constantes';
  
  export const barReducer = (state = { bars: [] }, action) => {
    switch (action.type) {
      case FETCH_BARS_REQUEST:
      case ADD_BAR_REQUEST:
      case EDIT_BAR_REQUEST:
      case DELETE_BAR_REQUEST:
        return { loading: true, bars: state.bars };
  
      case FETCH_BARS_SUCCESS:
        return { loading: false, bars: action.payload };
  
      case ADD_BAR_SUCCESS:
        return { loading: false, bars: [...state.bars, action.payload] };
  
      case EDIT_BAR_SUCCESS:
        return {
          loading: false,
          bars: state.bars.map((bar) =>
            bar._id === action.payload._id ? action.payload : bar
          ),
        };
  
      case DELETE_BAR_SUCCESS:
        return {
          loading: false,
          bars: state.bars.filter((bar) => bar._id !== action.payload),
        };
  
      case FETCH_BARS_FAIL:
      case ADD_BAR_FAIL:
      case EDIT_BAR_FAIL:
      case DELETE_BAR_FAIL:
        return { loading: false, error: action.payload, bars: state.bars };
  
      default:
        return state;
    }
  };
  