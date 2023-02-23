import { SEARCH_PROFILE } from "../actions";

const initialState = {
    results: []
}

const searchProfileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SEARCH_PROFILE:
            return {
                ...state,
                results: action.payload
            }

        default:
            return state;
    }
}

export default searchProfileReducer