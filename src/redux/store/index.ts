import { configureStore } from "@reduxjs/toolkit";
import fetchAllProfilesReducer from "../../reducers/fetchAllProfilesReducer";
import setUniqueProfilesReducer from "../../reducers/setUniqueProfilesReducer";
import fetchExperienceReducer from "../../reducers/fetchExperienceReducer";
import { combineReducers } from "@reduxjs/toolkit";
import fetchMyProfilesReducer from "../../reducers/fetchMyProfile";
import fetchPostsReducer from "../../reducers/fetchPostsReducer";
import likesReducer from "../../reducers/likesReducer";
import searchProfileReducer from "../../reducers/searchProfileReducer";

const combinedReducers = combineReducers({
  allProfiles: fetchAllProfilesReducer,
  experience: fetchExperienceReducer,
  myProfile: fetchMyProfilesReducer,
  uniqueProfiles: setUniqueProfilesReducer,
  posts: fetchPostsReducer,
  likes: likesReducer,
  search: searchProfileReducer
});

const store = configureStore({
  reducer: combinedReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
