import { useContext,createContext, useState, Children } from "react";
const myContext=createContext();
const UserContext=({Children})=>{
    const[name ,setName]=useState("ishika");
    return(
        <>
<myContext.Provider value={{name,setName}}>
    {Children}
</myContext.Provider>
        </>
    )
}
export default UserContext;
export{myContext};