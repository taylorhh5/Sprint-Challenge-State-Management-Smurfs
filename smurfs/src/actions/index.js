import axios from "axios";
export const FETCHING_SMURF_START = "FETCHING_JOKE_START";
export const FETCHING_SMURF_SUCCESS = "FETCHING_JOKE_SUCCESS";
export const FETCHING_SMURF_FAILURE = "FETCHING_JOKE_FAILURE";


export const getSmurf = () => dispatch => {
  dispatch({ type: FETCHING_SMURF_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
        console.log ("smurfdata", res.data)
    //    dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data });
    })
    //  .catch(err => {
    //    dispatch({ type: FETCHING_SMURF_FAILURE, payload: res.data });
    //  });
 };
