import { SET_UNIQUE_PROFILES } from "../actions";
import { IAllProfiles } from "../interfaces/IAllProfiles";

const initialState: IAllProfiles = {
    results: [],
};


const setUniqueProfilesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_UNIQUE_PROFILES:

            return {
                ...state,
                results: action.payload
            }

        default:
            return state;
    }
}

export default setUniqueProfilesReducer