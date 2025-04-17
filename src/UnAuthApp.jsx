import { useState ,useContext } from "react"
import { myContext } from "./LoginContext";
const UnAuthApp=()=>{
const [name ,setName]=useState("");
const {login}=useContext(myContext);
    return(
        <>
       enter your name: <input type="text" value={name}
       onChange={(e)=>{setName(e.target.value)}}
       />
        <button onClick={()=>(login(name))}>Login</button>
        </>
    )
}
export default UnAuthApp;