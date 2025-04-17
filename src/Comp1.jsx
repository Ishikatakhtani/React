// multiple file  comp2,3,4,5
import Comp2 from "./comp2";
 const Comp1=({user})=>{
    return(
        <>
        <h1>Welcome : {user}</h1>
        {/* <Comp2 user={user}/> */}
        <Comp2/>
        </>
    )
}
export default Comp1;



//in one file only comp1
// import { useContext } from "react";
// import { myContext } from "./App";
// const comp1=()=>{
//     const {user}=useContext(myContext);
//     return(
//         <>
       
//         <h1> Welcome  to cybrom :{user}</h1>
//         </>
//     )
// }
// export default comp1;