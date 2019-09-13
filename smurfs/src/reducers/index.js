import {
    FETCHING_SMURF_START,
    FETCHING_SMURF_SUCCESS,
    FETCHING_SMURF_FAILURE
  } from '../actions/index.js'

  
  const initialState = {
    
    smurf:[],
   
    isFetching: false,
    error: ""
    
  };
 
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_SMURF_START:
        return {
       ...state,
    
          isFetching: true,
          error: ""
        };
      case FETCHING_SMURF_SUCCESS:
        return {
          ...state,
          isFetching: false,
          smurf: action.payload
        };
      default:
        return state;
    }
  };
  