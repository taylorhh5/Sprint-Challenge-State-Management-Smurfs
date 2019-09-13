import {
    FETCHING_SMURF_START,
    FETCHING_SMURF_SUCCESS,
    FETCHING_SMURF_FAILURE,
    POSTING_SMURF_SUCCESS,
    POSTING_SMURF_START
} from '../actions/index.js'


const initialState = {

    smurf: [
        // {
        //     name:null,
        //     age: null,
        //     height: null,
        //     id: null,
        // }

    ],

    isFetching: false,
    error: ""

};


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_SMURF_START:
            return {
                
               
                isFetching: true,
                error: ""
            };
        case FETCHING_SMURF_SUCCESS:
            return {
                ...state,
            

                isFetching: false,
                smurf: action.payload
            };

            case POSTING_SMURF_SUCCESS:
                console.log("this is working")
            return {
                ...state,
                smurf:[...state.smurf, action.payload],
               
                isFetching: false,
                error: ""
            };
            case POSTING_SMURF_START:
                    console.log("this is starting")
                return {
                    ...state,
                    
                   
                    isFetching: true,
                   
                };

        default:
            return state;
    }
};
