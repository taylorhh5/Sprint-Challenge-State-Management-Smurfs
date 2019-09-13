

import React from "react";
import { connect } from "react-redux";
import { getSmurf } from "../actions/index.js"
 function People(props) {


  return(

    <div>
        <h3>Name:{props.name}</h3>
        <h3>age:{props.age}</h3>

    </div>

  )
}

const mapStateToProps = state => {
    console.log("state", state)
    return {
        smurf: state.smurf,

        isFetching: state.isFetching,
        error: state.error
    };
}

export default connect(
    mapStateToProps,
    { getSmurf }
)(People);