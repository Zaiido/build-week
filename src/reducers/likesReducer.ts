import { ADD_TO_LIKES, REMOVE_FROM_LIKES } from "../actions";
import { IAllPosts } from "../interfaces/IAllPosts";

const initialState: IAllPosts = {
  results: [],
};

const likesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_LIKES:
      return {
        ...state,
        results: [...state.results, action.payload],
      };

    case REMOVE_FROM_LIKES:
      return {
        ...state,
        results: state.results.filter(
          (likedPost) => likedPost._id !== action.payload
        ),
      };

    default:
      return state;
  }
};
export default likesReducer;
