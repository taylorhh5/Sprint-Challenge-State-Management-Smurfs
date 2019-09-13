import React, { useState, useReducer } from 'react';
// import { initialState, todoReducer } from "../../Reducers/todoReducer.js"

const SmurfForm = () => {
    const [add, setAdd] = useState({

    });
    // const [state, dispatch] = useReducer(todoReducer, initialState);



    const handleChange = event => {
        event.preventDefault();
        setAdd(event.target.value);
    };

    // const handleSubmit = event => {
    //     event.preventDefault();
    //     dispatch({ type: "ADD_TODO", payload: todo });
    //     setNew("");
    //     console.log(state)
    // }
    // const completed = event => {
    //     event.preventDefault();
    //     dispatch({ type: "NOW_COMPLETED" });

    // }





    return (

        <form>
            <input
                name="name"
                value={add.name}
                placeholder='name'
                onchange={handleChange}            />
            <input
                name="age"
                value={add.age}
                placeholder='age'
                onchange={handleChange}  
            />
            <input
                name="height"
                value={add.height}
                placeholder='height'
                onchange={handleChange}  
            />
            <button>Add a smurf</button>

        </form>
    )
}

export default SmurfForm;