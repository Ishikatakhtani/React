// TOPIC 1

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
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


//CAROUSELS
import Carousel from 'react-bootstrap/Carousel';

// image in react 
import im from "./images/i1.jpg"
import imm from "./images/i3.jpg"
import immm from "./images/i2.jpg"

//card 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import t from "./images/taj1.jpg"
import t1 from "./images/taj2.jpg"
import t2 from "./images/taj3.jpg"

// if you want rows and cols 
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const App=()=>{
  return(
    
    <>
    
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Services">Book</Nav.Link>
            <Nav.Link href="#home">Latest info</Nav.Link>
            <Nav.Link href="#About">Features</Nav.Link>
            <Nav.Link href="#Services">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


 {/* CAROUSELS */}

 <Carousel>
      <Carousel.Item>
      <img src={im} alt=""  width="100%" height="500"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={imm} alt="" width="100%" height="500" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={immm} alt="" width="100%" height="500"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


{/* if you want rows cols from bootstrap */}
<div id="usingbootstrap">
    <Container fluid="md">
      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={t2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
{/* card1 */}

<Col>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={t} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    {/* card1 */}
    <Col>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={t1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>

    </div>
<div id="mycard">
{/* card */}

{/* card1 */}

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={t2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

{/* card1 */}

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={t} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    {/* card1 */}

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={t1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
</>
)

}
export default App;