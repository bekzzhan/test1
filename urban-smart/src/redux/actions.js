import { TOGGLE_FORM_VALIDITY } from "./types";

export const toggleFormValidity = (isFormValid) => {
  return {
    type: TOGGLE_FORM_VALIDITY,
    payload: isFormValid,
  };
}