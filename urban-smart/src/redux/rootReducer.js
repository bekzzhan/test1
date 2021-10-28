import { initialState } from "./initialState";
import { TOGGLE_FORM_VALIDITY } from "./types";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FORM_VALIDITY: 
      return {
        ...state,
        isFormValid: action.payload
      };
    default: return state
  }
}

export default rootReducer;
