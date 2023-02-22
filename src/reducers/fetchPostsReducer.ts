import { GET_POST } from "../actions";
import { IAllPosts } from "../interfaces/IAllPosts";

const initialState: IAllPosts = {
  results: [],
};

const fetchMyProfilesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        results: action.payload,
      };

    default:
      return state;
  }
};
export default fetchMyProfilesReducer;
