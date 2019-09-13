import React, { useState, useEffect } from 'react';


const SmurfForm = props => {
    const [name, setSmurfName] = useState("")
    const [age, setSmurfAge] = useState("")
    const [height, setSmurfHeight] = useState("")
    const [add, setAdd] = useState({ name, age, height })


    useEffect(()=>{
        setAdd({ name, age, height })
    },[age, name, height]
    )
    
    // const [add, setAdd] = useState({



    //     name: "",
    //     age: "",
    //     height: "",




    // });




    // const handleChange = event => {

    //     setAdd(event.target.value);



    // };

    const handlesubmit = event => {
        console.log (add)
        event.preventDefault();
        props.addSmurf(add);
        setAdd({
            name: "",
            age: "",
            height: "",

        })

    }




    return (

        <form>
            <input
                name="name"
                // value={smurfName}
                placeholder='name'
                onChange={(event)=> setSmurfName(event.target.value)}  />
            <input
                name="age"
                // value={smurfAge}
                placeholder='age'
                onChange={(event)=> setSmurfAge(event.target.value)} 
            />
            <input
                name="height"
                // value={smurfHeight}
                placeholder='height'
                onChange={(event)=> setSmurfHeight(event.target.value)} 
            />


            <button onClick={handlesubmit}
            >Add a smurf</button>

        </form>
    )
}

export default SmurfForm;