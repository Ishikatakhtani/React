import { Link, Outlet } from "react-router-dom"



const Layout=()=>{

    return(
       <>
       <Link to="home">Home</Link>
       <Link to="about">About</Link>
       <Link to="contact">Contact</Link>

       <hr boder="1" color="red" />


       <Outlet/>

       <hr boder="1" color="red" />
       all rights reserved
       </>
    )
}
export default Layout