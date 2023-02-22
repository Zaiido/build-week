import { GET_MY_PROFILE } from "../actions";
import { IAllProfiles } from "../interfaces/IAllProfiles";

const initialState: IAllProfiles = {
  results: [],
};

const fetchMyProfilesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_MY_PROFILE:
      return {
        ...state,
        results: action.payload,
      };

    default:
      return state;
  }
};
export default fetchMyProfilesReducer;
