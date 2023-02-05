import { actionTypes } from "./actionTypes";

export const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  streetAddress: "",
  city: "",
  date: "",
  quantity: 0,
  age: "",
  gender: "",
  term: false,
};
export const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case actionTypes.TOGGLE:
      return {
        ...state,
        term: !state.term,
      };
    default:
      return state;
  }
};
