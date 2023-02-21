import { Dispatch } from 'redux';

export const GET_ALL_PROFILES = "GET_ALL_PROFILES";

export const fetchAllProfilesAction = () => {
    return async (dispatch: Dispatch) => {
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzOTBhMDgzODFmYzAwMTNmZmZhZTEiLCJpYXQiOjE2NzY5MDY2NTYsImV4cCI6MTY3ODExNjI1Nn0.dS-mJz9dPZvOvHRQqPy2I6yqTVHPW3mZ-MKpxfhxw8I"
                }
            })

            if (response.ok) {
                let profiles = await response.json()
                dispatch({
                    type: GET_ALL_PROFILES,
                    payload: profiles
                })
            } else {
                console.log("Error")
            }
        } catch (error) {
            console.log(error)
        }
    }
}
