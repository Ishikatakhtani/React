import { useState } from "react";
import axios from "axios";

const Inser=()=>{
    const[input,setInput]=useState({})
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value
            
        }));
        console.log(input);
    }
    const handlesubmit=async()=>{
        let api="http://localhost:3000/Student";
        const response=await axios.post(api,input);
        console.log(response);
        alert("data saved");
    }

    return(
        <>
        <h1>
            Insert page
        </h1>
        Enter empno :<input type="text" name="empno" onChange={handleInput}/>
        <br />

        Enter name :<input type="text" name="name" onChange={handleInput}/>
        <br />

        Enter desgnation :<input type="text" name="desgnation" onChange={handleInput}/>
        <br />

        Enter salary :<input type="text" name="salary" onChange={handleInput}/>
        <br />

        <button onClick={handlesubmit}>Submit</button>
        </>
    )
}
export default Inser