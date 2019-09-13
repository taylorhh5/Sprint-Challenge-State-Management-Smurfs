import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurf } from "../actions/index.js"
import People from './people.js'

// ({ getSmurf, smurf, isFetching, error })
const SmurfVillage = (props)=> {
    useEffect(() => {

        getSmurf();
    }, [getSmurf]);

    if (props.isFetching) {
        return <h3>fetching</h3>;
    }

    return (
        <div className="parentdiv">
            <h2 > Smurfs  </h2>

            {props.smurf.map(person=>(
                <People
                name={person.name}
                age={person.age}
                />
            ))}

            {/* <h2 > 1.{smurf.name}  </h2> */}

        </div>
    );
};

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
)(SmurfVillage);
