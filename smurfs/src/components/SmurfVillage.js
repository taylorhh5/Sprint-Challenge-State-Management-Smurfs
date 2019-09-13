

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurf } from "../actions/index.js"


const SmurfVillage = ({ getSmurf,  isFetching, error }) => {
  useEffect(() => {
    
    getSmurf();
  }, [getSmurf]);
 
  if (isFetching) {
    return <h3>Smurfs</h3>;
  }

  return (
    <div className="parentdiv">
      <h2 > Smurfs </h2>
      
    </div>
  );
};

const mapStateToProps = state => {
    console.log (state)
  return {
    smurf: state.smurf,

    isFetching: state.isFetching,
    error: state.error
  };
}

export default connect(
  mapStateToProps,
  { getSmurf }
)(SmurfVillage);
