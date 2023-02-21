import { configureStore } from "@reduxjs/toolkit";
import fetchAllProfilesReducer from "../../reducers/fetchAllProfilesReducer";
import { combineReducers } from '@reduxjs/toolkit'


const combinedReducers = combineReducers({
    allProfiles: fetchAllProfilesReducer
})

const store = configureStore({
    reducer: combinedReducers
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store