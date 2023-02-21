import { GET_ALL_PROFILES } from "../actions";
import { IAllProfiles } from "../interfaces/IAllProfiles";

const initialState: IAllProfiles = {
    results: [],
};

const fetchAllProfilesReducer = (state = initialState, action:any) => {

    switch (action.type) {
        case GET_ALL_PROFILES:
            return {
                ...state,
                results: action.payload
            }
    
        default:
            return state
    }
    }

    export default fetchAllProfilesReducer