import { useContext } from "react";
import { myContext } from "./UserContext";
const Comp7=()=>{
    const {name}=useContext(myContext);
    return(
        <>
        <h1>
            Welcome to cybrom {name}
        </h1>
        </>
    )
}
export default Comp7;