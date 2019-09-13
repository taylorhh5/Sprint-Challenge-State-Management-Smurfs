import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurf } from "../actions/index.js"
import People from './people.js'
import SmurfForm from './AddASmurf.js'

const SmurfVillage = (props)=> {
    useEffect(() => {

        props.getSmurf();
    }, [getSmurf]);

    if (props.isFetching) {
        return <h3>fetching</h3>;
    }

    return (
        <div className="parentdiv">
            
            {/* <form>
<input
name="name"
value=""
placeholder='name'
onchange=''
/>
<input
name="age"
value=""
placeholder='age'
onchange=''
/>
<input
name="height"
value=""
placeholder='height'
onchange=''
/>
 <button>Add a smurf</button>

            </form> */}
           < SmurfForm />
            {props.smurf.map(person=>(
                <People
                name={person.name}
                age={person.age}
                height={person.height}
                />
            ))}

            

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
