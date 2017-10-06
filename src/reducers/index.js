import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import PeopleReducer from "./people-reducer";
export default combineReducers({
  form: reduxForm,
  people: PeopleReducer
});
