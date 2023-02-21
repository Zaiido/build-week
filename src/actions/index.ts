import { Dispatch } from "redux";

export const GET_ALL_PROFILES = "GET_ALL_PROFILES";
export const GET_EXPERIENCE = "GET_EXPERIENCE";
export const GET_MY_PROFILE = "GET_MY_PROFILE";

export const fetchAllProfilesAction = () => {
  return async (dispatch: Dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzOTBhMDgzODFmYzAwMTNmZmZhZTEiLCJpYXQiOjE2NzY5MDY2NTYsImV4cCI6MTY3ODExNjI1Nn0.dS-mJz9dPZvOvHRQqPy2I6yqTVHPW3mZ-MKpxfhxw8I",
          },
        }
      );

      if (response.ok) {
        let profiles = await response.json();
        dispatch({
          type: GET_ALL_PROFILES,
          payload: profiles,
        });
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchExperienceAction = () => {
  return async (dispatch: Dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/63f36ff58381fc0013fffadf/experiences",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzNmZmNTgzODFmYzAwMTNmZmZhZGYiLCJpYXQiOjE2NzY4OTgyOTQsImV4cCI6MTY3ODEwNzg5NH0.n_FTGhlX9c6j23fCYIPFM6lg70LgdPtYXQ8thi09Ges",
          },
        }
      );

      if (response.ok) {
        let exp = await response.json();
        console.log(exp);

        dispatch({
          type: GET_EXPERIENCE,
          payload: exp,
        });
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const postJobAction = (job: {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  stillWorkingHere: boolean;
  description: string;
  area: string;
}) => {
  return async (dispatch: Dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/63f36ff58381fc0013fffadf/experiences",
        {
          method: "POST",
          body: JSON.stringify(job),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzNmZmNTgzODFmYzAwMTNmZmZhZGYiLCJpYXQiOjE2NzY4OTgyOTQsImV4cCI6MTY3ODEwNzg5NH0.n_FTGhlX9c6j23fCYIPFM6lg70LgdPtYXQ8thi09Ges",
          },
        }
      );

      if (response.ok) {
        console.log("posted");
      } else {
        alert("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//   let movies = await res.json();
//   onLoadActions();

// }

export const deleteJobAction = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/63f36ff58381fc0013fffadf/experiences/" +
          id,
        {
          method: "DELETE",

          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzNmZmNTgzODFmYzAwMTNmZmZhZGYiLCJpYXQiOjE2NzY4OTgyOTQsImV4cCI6MTY3ODEwNzg5NH0.n_FTGhlX9c6j23fCYIPFM6lg70LgdPtYXQ8thi09Ges",
          },
        }
      );

      if (response.ok) {
        console.log("deleted");
      } else {
        alert("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
