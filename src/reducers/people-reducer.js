import { FETCH_PEOPLE } from "../actions";
const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PEOPLE:
      return {
        ...state,
        people: action.payload,
    }

    default:
      return state;
  }
};
