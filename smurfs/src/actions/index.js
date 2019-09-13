import axios from "axios";
export const FETCHING_SMURF_START = "FETCHING_JOKE_START";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const FETCHING_SMURF_FAILURE = "FETCHING_SMURF_FAILURE";
export const POSTING_SMURF_SUCCESS = "POSTING_SMURF_SUCCESS";
export const POSTING_SMURF_START = "POSTING_SMURF_START";

export const getSmurf = () => dispatch => {
  dispatch({ type: FETCHING_SMURF_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
        console.log ("smurfdata", res.data)
       dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data });
    })
    //  .catch(err => {
    //    dispatch({ type: FETCHING_SMURF_FAILURE, payload: res.data });
    //  });
 };




 
export const addSmurf = (smurf) => dispatch => {
    dispatch({ type: POSTING_SMURF_START });
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
          console.log ("smurfdata", res.data)
         dispatch({ type: POSTING_SMURF_SUCCESS, payload: res.data });
      })
      //  .catch(err => {
      //    dispatch({ type: FETCHING_SMURF_FAILURE, payload: res.data });
      //  });
   };
  
