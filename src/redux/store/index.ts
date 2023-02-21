import { configureStore } from "@reduxjs/toolkit";
import fetchAllProfilesReducer from "../../reducers/fetchAllProfilesReducer";
import setUniqueProfilesReducer from "../../reducers/setUniqueProfilesReducer";
import fetchExperienceReducer from "../../reducers/fetchExperienceReducer";
import { combineReducers } from "@reduxjs/toolkit";
import fetchMyProfilesReducer from "../../reducers/fetchMyProfile";

const combinedReducers = combineReducers({

  allProfiles: fetchAllProfilesReducer,
  experience: fetchExperienceReducer,
  myProfile: fetchMyProfilesReducer,
  uniqueProfiles: setUniqueProfilesReducer
});

const store = configureStore({
  reducer: combinedReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
