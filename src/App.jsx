// TOPIC 1

// const { useReducer } = require("react")

// const { useState } = require("react")
// const { use } = require("react")

// const { useState } = require("react")

// import { useEffect } from "react";
// import React, { useState } from "react";

// const name="ishika"
// const age=20
// const salary=100000
// const App=()=>{
//   return(
//     //EXPRESSION
//     <p> My name is {name} , age is {age} , my salary is {salary*10}</p>
//   )
// }
// export default App



// TOPIC 2 LARGE BLOCK OF CODE
// const subject=<ul> 
//   <li>java</li>
//   <li>python</li>
//   <li>SQL</li>
//   <li>js</li>
// </ul>
// const App=()=>{
//   return(
//   <p> Our subject {subject}</p>
//   )
// }
// export default App




// TOPIC 3 :- all should be inside one single element as jsx return only one element 
//creating a new tag just to wrap craetes a new node[this takes more memory 
// EXAMPLE :-
//  <div>
//<h1>Welcome</h1>
//<h1>To react class </h1>
//</div>
//]
//  so instead of it use <> </> THIS IS KNOW AS FRAGMENT  TAG , THIS DOES NOT TAKE EXTRA MEMORY THAT IS NEW NODE IS NOT CREATED

// const App=()=>{
//   return(
//    <>
//     <h1>USING</h1>
//     <h1>FRAGMENT TAG </h1>
//    </>
//     )
//    }
//    export default App



// NAV BAR 
// import { BrowserRouter, Routes,Route } from "react-router-dom";
// import Layout from "./Layout";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

// const App=()=>{
// return(

//   <>
//   <BrowserRouter>
//   <Routes>
//   <Route path="/" element={<Layout/>} >
//   <Route path="home" element={<Home/>}/>
//   <Route path="about" element={<About/>}/>
//   <Route path="contact" element={<Contact/>}/>

  
  
  
  
//   </Route>
  
//   </Routes>
  
//   </BrowserRouter>
  
//   </>
// )
// }
// export default App



// DOING CSS 
// const Styling=()=>{
//     return (
//         <>
//         <div style={{border:"3px solid red",width:"200px"}}>
//             Cybrom
//         </div>
//         </>
//     )
   
// }
// export default Styling;


// QUESTION FOR TEST OF CSS

// const Test=()=>{
//     return(
//         <div style={{ display:"flex",justifyContent:"center" ,textAlign:"center"}}>
// <div style={{border:"13px solid blue", width:"200px" ,color:"blue",boderRadius:"10px" }} >
// <div style={{border:"13px solid yellow", width:"180px",color:"yellow", borderRadius:"10px"}} >
// <div style={{border:"13px solid red", width:"160px",color:"red", borderRadius:"10px"}} >
//     Cybrom
// </div>
//     </div> 
// </div>
// </div>
//     )
// }
// export default Test;



// using another method of css
// const data={
//     color:"red",
//     textDecoration:"underline"
// }
// const App=()=>{
// return(
// <>
// <h1 style={data}>Welcome</h1>
// </>
// )
// }
// export default App;

//external css
// import Cybrom from "./Cybrom"
// const App=()=>{
//   return(
//     <>
//     <h1 className="hey">welcome to react</h1>
//     <Cybrom/>
//     </>
//   )
// }
// export default App




// image in react + nav bar

//navbar 
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';


// //CAROUSELS
// import Carousel from 'react-bootstrap/Carousel';

 // image in react 
// import im from "./images/i1.jpg"
// import imm from "./images/i3.jpg"
// import immm from "./images/i2.jpg"

// //card 
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// import t from "./images/taj1.jpg"
// import t1 from "./images/taj2.jpg"
// import t2 from "./images/taj3.jpg"

// // if you want rows and cols 
// // import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// const App=()=>{
//   return(
    
//     <>
    
//      <Navbar bg="dark" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#About">About</Nav.Link>
//             <Nav.Link href="#Services">Book</Nav.Link>
//             <Nav.Link href="#home">Latest info</Nav.Link>
//             <Nav.Link href="#About">Features</Nav.Link>
//             <Nav.Link href="#Services">Pricing</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>


//  {/* CAROUSELS */}

//  <Carousel>
//       <Carousel.Item>
//       <img src={im} alt=""  width="100%" height="500"/>
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img src={imm} alt="" width="100%" height="500" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img src={immm} alt="" width="100%" height="500"/>
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>


// {/* if you want rows cols from bootstrap */}
// <div id="usingbootstrap">
//     <Container fluid="md">
//       <Row>
//         <Col>
//         <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={t2} />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//     </Col>
// {/* card1 */}

// <Col>
// <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={t} />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//     </Col>
//     {/* card1 */}
//     <Col>
// <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={t1} />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//         </Col>
//       </Row>
//     </Container>

//     </div>
// <div id="mycard">
// {/* card */}

// {/* card1 */}

// <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={t2} />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>

// {/* card1 */}

// <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={t} />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>

//     {/* card1 */}

// <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={t1} />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//     </div>
// </>
// )

// }
// export default App;



// WEBSITE

//nav bar
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

//  // CAROUSELS 
// import Carousel from 'react-bootstrap/Carousel';

// //images 
//  import im from "./images/tata4.jpg"
//  import imm from "./images/tata9.jpg"
//  import immm from "./images/tata2.jpg"
//  import immmm from "./images/tata1.jpg"


//  //card 
//  import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';


// // images for card 
// import t from "./images/tata5.jpg"
// import t1 from "./images/tata6.jpg"
// import t2 from "./images/tata7.jpg"
// import t3 from "./images/tata8.jpg"


// // rows cols 
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// const App=()=>{
//     return(
//       <>
//       <Navbar bg="dark" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">TATA MOTORS <br /> <Nav.Link href="#home"> Connecting aspiration </Nav.Link></Navbar.Brand>
//           <Nav id="me-auto">
//             <Nav.Link href="#home">Future of mobality</Nav.Link>
//             <Nav.Link href="#features">Organization</Nav.Link>
//             <Nav.Link href="#pricing">Business</Nav.Link>
//             <Nav.Link href="#pricing">Cooperate responsibility</Nav.Link>
//             <Nav.Link href="#pricing">Investors</Nav.Link>
//             <Nav.Link href="#pricing">Newsroom</Nav.Link>
//             <Nav.Link href="#pricing">Careers</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>

//     {/* CAROUSELS */}

//     <Carousel>
//        <Carousel.Item>
//        <img src={im} alt=""  width="100%" height="500"/>
//          <Carousel.Caption>
//            <h3>Padma Vibhushan</h3>
//            <p>
// Mr. Ratan N Tata
// 28.12.1937 – 09.10.2024
// <br />
// Read Note</p>
//          </Carousel.Caption>
//        </Carousel.Item>
//        <Carousel.Item>
//        <img src={imm} alt="" width="100%" height="500" />
//          <Carousel.Caption>
//            <h3>A spotLight on Sustaniblity</h3>
//            <p>Read More</p>
//          </Carousel.Caption>
//        </Carousel.Item>
//        <Carousel.Item>
//        <img src={immm} alt="" width="100%" height="500"/>
//          <Carousel.Caption>
//            <h3>Tommorrows Choice ,
//             <br /> Today
//            </h3>
//            <p>
//            Read More
//           </p>
//          </Carousel.Caption>
//        </Carousel.Item>
//        <Carousel.Item>
//        <img src={immmm} alt="" width="100%" height="500"/>
//          <Carousel.Caption>
//            <h3>Embarcing clean mobality </h3>
//            <p>
//            Read More
//           </p>
//          </Carousel.Caption>
//        </Carousel.Item>
//     </Carousel>

// <br /> <br /> <br /> <br /> <br />
//   {/* card */}

//   <Container>
//       <Row>
//         <Col>
    
   

//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top"  src={t1} />
//       <Card.Body>
//         <Card.Title>Building for the Progress</Card.Title>
//         <Card.Text>
         
//         </Card.Text>
//         <Button variant="primary">Explore</Button>
//       </Card.Body>
//     </Card>

//     </Col>

//     <Col>
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top"  src={t2} />
//       <Card.Body>
//         <Card.Title>Future ready begins Here</Card.Title>
//         <Card.Text>
          
//         </Card.Text>
//         <Button variant="primary">Explore</Button>
//       </Card.Body>
//     </Card>
//     </Col>

//     <Col>
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top"  src={t3} />
//       <Card.Body>
//         <Card.Title>The electric Advantge</Card.Title>
//         <Card.Text>
         
//         </Card.Text>
//         <Button variant="primary">Explore</Button>
//       </Card.Body>
//     </Card>
//     </Col>
//     </Row>
//     </Container>
// <div style={{background:"grey"}} >
//   <div id="footer" >
//     <p>
//     <ul style={{textDecoration:"none",listStyle:"none" , paddingTop:"3%"}}> 
//       <h5>
//    <li style={{color:"black"}}>Future of mobality</li> </h5>
//    <li  style={{paddingTop:"5%", color:"white"}}>Business</li>
//    <li  style={{paddingTop:"5%", color:"white"}}>Commercial vehicles </li>
//    <li style={{paddingTop:"1%",color:"white"}}>
// Passenger vehicles
//    </li>
//    <li style={{paddingTop:"1%",color:"white"}}>Electric vehicles</li>
//    <li style={{paddingTop:"1%" , color:"white"}}>
//    Luxury vehicles</li>
//  </ul>
//       </p>
      
//       <p>
//         <ul style={{textDecoration:"none",listStyle:"none" , paddingTop:"3%", paddingLeft:"35%"}}>
//         <h5>
//           <li style={{color:"black"}}>Organisation</li></h5>
//           <li style={{paddingTop:"3%",color:"white"}}>Overview</li>
//           <li style={{paddingTop:"1%",color:"white"}}>About us</li>
//           <li style={{paddingTop:"1%",color:"white"}}>Our history</li>
//           <li style={{paddingTop:"1%",color:"white"}}>Our leadership</li>
//           <li style={{paddingTop:"1%",color:"white"}}>Our global presence</li>
//           <li style={{paddingTop:"1%",color:"white"}}>Subsidiaries and other entities</li>
//           <li style={{paddingTop:"1%",color:"white"}}>Innovations</li>
//         </ul>
//       </p>
      
//       <p>
//         <ul style={{textDecoration:"none",listStyle:"none" , paddingTop:"3%", paddingLeft:"35%"}}>
//         <h5>
//            <li style={{color:"black"}}>Cooperate Responsibility</li>
//            </h5>
//           <li style={{paddingTop:"3%",color:"white"}}>Overview</li>
//           <li style={{paddingTop:"1%",color:"white"}}>Planet</li>
//           <li style={{paddingTop:"1%",color:"white"}}> Governance</li>
//         </ul>
//       </p>

//       <p>
//         <ul style={{textDecoration:"none",listStyle:"none" , paddingTop:"3%", paddingLeft:"35%"}}>
//         <h5>
//           <li style={{color:"black"}}>Newsroom</li> </h5>
//           <li style={{paddingTop:"3%",color:"white"}}>Overview</li>
//           <li style={{paddingTop:"1%",color:"white"}}>Press releases</li>
//           <li style={{paddingTop:"1%",color:"white"}}> Thought leadership
//           Media library</li>
//         </ul>
//       </p>
//       </div>
//       <h5 style={{color:"black"}}>Social Media</h5>
//       </div>
    
     
//       </>
//     )
//   }

//   export default App


// EVENT IN REACT JS

// const App=()=>{
//   const display=()=>{
//     alert("this is event in js")
//   }
//   return(
//     <>
//     <h1>Welcome</h1>
//     <button onClick={display}>Click Here</button>
//     </>
    
//         )
// }
// export default App;

//PASSING ARGUMENT
// const App=()=>{
//   const Myname=(nm)=>{
//     alert(`my name is ${nm}`);
//   }
//   return(
//     <>
//         <h1>Welcome</h1>
//     <button onClick={()=>{Myname("ishika")}}></button>
//     </>
//   )
// }
// export default App;

//IMP
// const App=()=>{
//   const display=(e)=>{
//          alert("type of event" +" "+e.type+" "+"name of button "+ " "+e.target.name+" "+"value of button"+" "+e.target.value)
//        }
//        return(
//         <>
//          <h1>Welcome</h1>
//          <button name="btn" value="mybtn" onClick={display}>Click Here</button>
//          </>
//          )
// }
// export default App;

//taking input
// const App=()=>{
//   const myshow=(e)=>{
//     //e is event obj
//     console.log(e)
//     console.log(e.target.value)
//     console.log(e.target.name)
//   }
// return(
// <>
// Enter name < input  name="ishika" type="text" onClick={myshow}/>
// </>
// )
// }
// export default App;


// const App=()=>{
//   const display=(nm,e)=>{
// alert("name "+" "+nm+" "+"button name"+e.target.name+" "+"button value"+" "+e.target.value)
//   }
//   return(
//     <>
//     <button name="btn" value="mybtn" onClick={(e)=>{display("ishika",e)}}>Click </button>
//     </>
//   )
// }
// export default App;

//FORM 
//HOOK
//changing  name using setName
// const App=()=>{
//   const[name,setName]=useState("Ishika");
//   return(
// <>
// <h1>My name is {name}</h1>
// <button onClick={()=>{setName("Jia")}}>Click me</button>
// </>
//   )
// }
// export default App;


//changing  color using setColor
// const App=()=>{
//   const[color,setColor]=useState("red")
// return(
//   <>
//   <h1 style={{color:color}}>Fav color:{color}</h1>
//   <button onClick={()=>{setColor("green")}}>Green color</button>
//   <button onClick={()=>{setColor("blue")}}>Blue color</button>
//   <button onClick={()=>{setColor("orange")}}>Orange color</button>
//   <button onClick={()=>{setColor("pink")}}>Pink color</button>
//   </>
// )
// }
// export default App;

//create counter app //IMP INTERVIEW QUESTION
// import { useState } from "react";
// import { Button } from "react-bootstrap";
// const App=()=>{
//   const [cnt,setName]=useState(0);
//   const mydec=()=>{
//     if(cnt<=0){
//       alert("Not less than zero!");
//     }
//     else{
//       setName(cnt-1);
//     }
//   }
//   return (
//     <>
//       <h1 align="center">My Counter App</h1>
//       <div
//         style={{
//           border: "2px soild black",
//           padding: "20px",
//           borderRadius: "30px",
//           backgroundColor: "lightGreen",
//           width: "300px",
//           margin: "auto",
//         }}
//       >
//         <h1>My Count :{cnt}</h1>
//         <button style={{color:"red"}} onClick={()=>{setName(cnt+1)}}>Incerment</button>
//         <button onClick={mydec}>Decerment</button>
//         <button onClick={()=>{setName(0)}}>Reset</button>
//       </div>
//     </>
//   );
// }
// export default App;

//imp useEffect
// import{useState,useEffect} from "react";
// const App=()=>{
//   const[count,setCount]=useState(0);
//   useEffect(()=>{
//     setTimeout(()=>{
//       setCount(count+1);
//     },4000);
//   });
//   return(
//     <>
//     <h1>Welcome:{count}</h1>
//     </>
//   )
// }
// export default App;


// type 1 useState
// import { useState } from "react";
// const App=()=>{
//   const[count,setCount]=useState(0);
//   //syntax od usestate

// useState(()=>{
//   setTimeout(()=>{setCount(count+1)},5000)

// });

// return(
//   <>
//   <h1>React Example:{count}</h1>
//   </>
// )
// }
// export default App;

//type 2 useState [not working corect it]
// import { useState } from "react";
// const App=()=>{
//   const[count,setCount]=useState(0);
//   //syntax of usestate

// useEffect(()=>{
//   setTimeout(()=>{
//     setCount(count+1);
//   },5000)
  
// },[])
// return(
//   <>
//   <h1>React Example:{count}</h1>
//   </>
// )
// }
// export default App;


//type 3 useState
// import { useEffect } from "react";
// import { useState } from "react";
// const App=()=>{
//   const [count,setCount]=useState(0);
//   const[multi,setMulti]=useState(0);
//   useEffect(()=>{
//     setMulti(count*2)
//   },[count])
//   return(
//     <>
//     <h1>My counter:{count}</h1>
//     <h1>My mul:{multi}</h1>
//     <button onClick={()=>{setCount(count+1)}}>ClickME</button>
//     </>
//   )
// }
// export default App;


//form
// import { useState } from "react";
// const App=()=>{
//   const[name,setName]=useState("")
//   const[city,setCity]=useState("")
  
//   const handlesubmit=()=>{
//     alert(`my name is ${name} city:${city}`)
//   }
//   return(
//     <>
//     <h1>Application Form</h1>
//     name :<input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
// city:<input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
//     <button onClick={handlesubmit}>Submit</button>
//     </>
//   )
// }
// export default App;



//form //impppppp
// import {useState} from "react";

// const App=()=>{
//   const[input,setInput]=useState({});

//   const handleInput=(e)=>{
//   let name=e.target.name;
//   let value=e.target.value;

//   setInput(values=>({...values,[name]:value}))
//   console.log(input)
//   }
 
//   return(
//     <>
//     <h1>Application form</h1>
//     rollno: <input type="text" name="rollno" onChange={handleInput}/>
//     <br />
//     name: <input type="text" name="name" onChange={handleInput} />

//     <br />

//     <br />
//     city: <input type="text" name="city" onChange={handleInput} />

//     <br />
//     fees: <input type="text" name="fees" onChange={handleInput} />

//     <button >Save!!</button>

//     </>
//   )
// }
// export default App;


// form with bakend (json file name db.json)
// import {useState} from "react";
// import axios from "axios";
// const App=()=>{
// const[input,setInput]=useState({});
// const handleInput=(e)=>{
// let name=e.target.name;
// let value=e.target.value;
// setInput(values=>({...values,[name]:value}))
//   console.log(input)

// }

// const handlesubmit=async()=>{
//   let api="http://localhost:3000/Student";
// const response=await axios.post(api,input);
// alert("data saved")
// }
//   return(
//     <>
//     <h1>Application form</h1>
//     rollno: <input type="text" name="rollno" onChange={handleInput}/>
//     <br />
//     name: <input type="text" name="name" onChange={handleInput} />

//     <br />

//     <br />
//     city: <input type="text" name="city" onChange={handleInput} />

//     <br />
//     fees: <input type="text" name="fees" onChange={handleInput} />

//     <button onClick={handlesubmit} >Save!!</button>

//     </>
//   )
// }
// export default App;



// Projj1 for form control [pages are in pages file]

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import Layout from "./Layout";
// import Home from "./pages/Home";
// import Inser from "./pages/Inser";
// import Display from "./pages/Display";
// import Update from "./pages/Update";

// import Container from 'react-bootstrap/Container';
//  import Nav from 'react-bootstrap/Nav';
//  import Navbar from 'react-bootstrap/Navbar';

// const App = () => {
//   return (
//     <>
//     <BrowserRouter>
//      <Navbar bg="dark" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">Employee Managment</Navbar.Brand>
//           <Nav className="me-auto">
          
//             <Nav.Link as={Link} to="/Home">Home</Nav.Link>
//               <Nav.Link as={Link} to="/Inser">Insert</Nav.Link>
//              <Nav.Link as={Link} to="/Display">Display</Nav.Link>
//               <Nav.Link as={Link} to="/Update">Update</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//       <br />
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="Home" element={<Home />} />
//           <Route path="Inser" element={<Inser />} />
//           <Route path="Display" element={<Display />} />
//           <Route path="Update" element={<Update />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>

//     <footer style={{display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "center",
//       textAlign: "center",
//       paddingTop:"30px"
//       }}>
//         <h4>
// All rights reserved.2025 </h4>
//     </footer>
//     </>
//   );
// };

//  export default App;



//

// import Comp1 from "./comp1";
// import { useState } from "react";
//  const {user,setuser}=useState("ishika");
// const App=()=>{
// return(
//   <>
//   <h1>Welcome</h1>
//   <h1>{user}</h1>
//   <Comp1 user={user}/>
//   </>
// )
// }
// export default App;




// import Comp1 from "./Comp1";
// import { useState, createContext } from "react";
// const myContext=createContext();
// const App=()=>{
//   const [user,setUser]=useState("ishika");
//   return(
//     <>
    
//     <h1>Welcome  to cybrom :{user}</h1>
//     <button onClick={()=>{setUser("varsha")}}>click</button>
//     <myContext.Provider value={{user,setUser}}>
//   <Comp1/>
//     </myContext.Provider>
//     </>
//   )
// }
// export default App;
// export{myContext};




//children is used if we use contanier tag for component  
//only uses comp6 
// import Comp6 from "./Comp6";
// import { useState, createContext } from "react";
// const myContext=createContext();
// const App=()=>{
//   const [user,setUser]=useState("ishika");
//   return(
//     <>
    
//     <h1>Welcome  to cybrom </h1>
   
//     <myContext.Provider value={{user,setUser}}>
//   <Comp6>
//     children
//     </Comp6>
//     </myContext.Provider>
//     </>
//   )
// }
// export default App;
// export{myContext};



// THIS USES COMP7 AND USERCONTEXT.JSX
// import Comp7 from "./Comp7";
// const App=()=>{
//   return(
//     <>
//     <h1>Welcome</h1>
//     <Comp7/>
//     </>
//   )
// }
// export default App;

//LOGIN SYSTEM
//THIS USES  LOGINCONTEXT,

// import AuthApp from "./AuthApp";
// import UnAuthApp from "./UnAuthApp";
// import { useContext } from "react";
// import { myContext } from "./LoginContext";
// const App=()=>{
//   const {user}= useContext(myContext);
//   return (
//     <>
//     <h1>Login</h1>
//     {user.auth ? <AuthApp/> : <UnAuthApp/>}
//     </>
//   )
// }
// export default App;



//Useref HOOK 
//used for DOM manipulation 
// import { useRef } from "react";

// const App=()=>{
//   const myref= useRef();
//   console.log(myref);

//   const myDisplay=()=>{
// myref.current.style.border="3px solid red";
// myref.current.style.width="200px";
// myref.current.style.backgroundColor="orange";
// myref.current.style.borderRadius="20px";
// myref.current.style.padding="30px";
//   }
//   return(
//     <>
//     <h1>hello</h1>
//     <button onClick={myDisplay}>Click </button>
//     <div ref={myref}>
// Using useref Hook
//     </div>
//     </>
//   )
// }
// export default App;

//Useref HOOK 
// import { useRef } from "react";
// const App=()=>{
//   const myRef=useRef("");

// const display=()=>{
//   myRef.current.innerHTML="We learn UseRef hook in react";
// }
//   return(
//     <>
//     <h1 ref={myRef}>welcome</h1>
//     <button onClick={display}>Click here</button>
//     </>
//   )
// }
// export default App;

//Useref Hook 

// import { useEffect, useRef, useState } from "react";
//  const App=()=>{

//   const [name, setName] = useState(" ");

//   const myref = useRef(0);
//   useEffect(()=>{
//     myref.current+=1;
//   })
//   return(
//     <>
//     enter name : <input type="text" value={name}  onChange={(e)=>{setName(e.target.value)}}/>
//     <h1>Rendering count : {myref.current} </h1>
//     </>
//   )
//  }
//  export default App;

//  import { useRef } from "react";

// const App=()=>{
//   const myref= useRef();
//   console.log(myref);

//   const myDisplay=()=>{
//     myref.current.style.textAlign="center"
//     myref.current.style.padding="30px";
//     myref.current.style.width="200px";
//     myref.current.style.FontSize="30px";
//     myref.current.style.textAlign="center";
// myref.current.style.backgroundColor="orange";
//   }
//   const Dis=()=>{
//     myref.current.innerHTML="Welcome to cybrom";
//       }
//       const Di=()=>{
//         myref.current.style.borderRadius="70px";
//         myref.current.style.border="3px";
//           }
//   return(
//     <>
    
//     <button onClick={myDisplay}>Background </button>
//     <button onClick={Dis}>Text</button>
//     <button onClick={Di}>boderRadius</button>
//     <div ref={myref} style={{textAlign:"center", fontSize:"50px"}}>
// Using useref Hook
//     </div>
//     </>
//   )
// }
// export default App;





//useReducer  //IMP
// import { useReducer } from "react"
// const App=()=>{

//     const reducerMethod=(state,action)=>{
// switch(action){
//     case"Increment":
//     return state+1;
//     case "Decrement":
//         return state-1;
//         default:
//         return state;
// }
//     }

//     const[count,dispatch]=useReducer(reducerMethod,0)
//     return(
//         <>
//         <h1>
//           Using useReducer Hook
//         </h1>
//         <button onClick={()=>{dispatch("Increment")}}>Increment</button>
//         <h1>Count : {count}</h1>
//         <button onClick={()=>{dispatch("Decrement")}}>Decrement</button>
//         </>
//     )
// }
// export default App;


// import { useReducer } from "react";
// const App=()=>{
//   const myReducer=( state , action)=>{

//     switch(action)
//     {
//       case "GREEN":
//         return state ="green";
//         case "RED":
//           return state = "red";
//           case "BLUE":
//             return state = "blue";
//             default:
//               return state;
//     }
//   }


//   const [color, dispatch]= useReducer (myReducer, "yellow");
// return(
//   <>
//   <h1>welcome</h1>
//   <button onClick={()=>{dispatch("RED")}}>REd</button>
//   <button onClick={()=>{dispatch("GREEN")}}>GREEN</button>
//   <button onClick={()=>{dispatch("BLUE")}}>BLUE</button>
//   <div style={{width:"300px", height:"200px", backgroundColor:color}}></div>
//   </>
// )
// }
// export default App;


//Use memoHook  //imppp
// import { useState ,useMemo} from "react";

// const App=()=>{
//     const[add,setAdd]=useState(0);
//     const[sub,setSub]=useState(100);
// const myMulti =useMemo(()=>{
//     console.log("***************");
//     return add*2;
// },[add]);
//     function multiply(){
        
//     }
//     return(
//         <>
//         <h1>Welcome</h1>
//         <h1>multiplication :{myMulti}</h1>
//         <button onClick={()=>{setAdd(add+1)}}>INC </button>
//         <h3>INC :{add}</h3>
//         <button onClick={()=>{setSub(sub-1)}}>DEC</button>
//         <h3>Dec :{sub}</h3>
//         </>
//     )
// }
// export default App;



import AuthApp from "./AuthApp";
import UnAuthApp from "./UnAuthApp";
import { useContext } from "react";
import { myContext } from "./LoginContext";
const App=()=>{
  const {user}= useContext(myContext);
  return (
    <>
    <h1>Login</h1>
    {user.auth ? <AuthApp/> : <UnAuthApp/>}
    </>
  )
}
export default App;
