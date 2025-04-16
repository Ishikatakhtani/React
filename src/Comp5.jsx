import { useContext } from "react";
import { myContext } from "./App";
const comp5=()=>{
    const {user}=useContext(myContext);
    return(
        <>
        <h1>Welcome</h1>
        <h1> Welcome {user}</h1>
        </>
    )
}
export default comp5;