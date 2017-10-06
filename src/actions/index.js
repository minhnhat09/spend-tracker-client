import peopleInit from "../reducers/people.json";

export const FETCH_PEOPLE = "fetch_people";
export const fetchPeople = () => {
  return {
    type: FETCH_PEOPLE,
    payload: peopleInit
  };
};
