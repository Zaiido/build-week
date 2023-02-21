import { GET_EXPERIENCE } from "../actions";
import { IAllExperience } from "../interfaces/IAllExperience";

const initialState: IAllExperience = {
  results: [],
};
const fetchExperienceReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_EXPERIENCE:
      return {
        ...state,
        results: action.payload,
      };

    default:
      return state;
  }
};

export default fetchExperienceReducer;
