import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  NavDropdown,
  Form,
  FormControl,
  Button,
  DropdownItem } from 'react-bootstrap';

import HomeIcon from "./icons/Home";
import {BasketIconContainer} from "./icons/Basket";
import "./css/links.css";
import "./css/form.css";
import "./css/logo.css";

class Menu extends Component{
render(){


       return(
         <>
<Navbar fixed="top" className="py-3" bg="dark" expand="lg">
   <NavLink className="nav-link logo" to="/">Jewgeny's Restaurant</NavLink>
   <Navbar.Toggle className="bg-secondary" aria-controls="basic-navbar-nav" />
   <Navbar.Collapse id="basic-navbar-nav">
     <Nav style={{width: "40vw"}} className="mr-auto d-flex justify-content-around">
       <HomeIcon />
       <NavLink activeStyle={{border: "1px solid green"}} className="nav-link links px-3 " exact to="/pizzas">Pizza</NavLink>
       <NavLink activeStyle={{border: "1px solid green"}} className="nav-link links px-3 " to="/burgers">Burger</NavLink>
       <NavLink activeStyle={{border: "1px solid green"}} className="nav-link links px-3 " to="/salads">Salad</NavLink>
       <BasketIconContainer />
           {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">
             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
             <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
             <NavDropdown.Divider />
             <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
           </NavDropdown>*/}
     </Nav>
     {/*<Form inline>
       <FormControl type="text" placeholder="Search" className="mobile mr-sm-2" />
       <Button variant="outline-success">Search</Button>
     </Form>*/}
   </Navbar.Collapse>
 </Navbar>

 </>
      /* <nav class="navbar navbar-toggleable-md navbar-light bg-faded">

             <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
            </button>
            <NavLink className="textDecoration" to="/" >JEWGENY'S RESTAURANT</NavLink>
             <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                 <ul className="navbar-nav mr-auto mt-2 mt-md-0">
                     <li className="nav-item active"> <NavLink className="textDecoration" to="/pizzas" >Pizza </NavLink></li>
                     <li className="nav-item"> <NavLink className="textDecoration" to="/burgers" >Burger</NavLink></li>
                     <li className="nav-item"> <NavLink className="textDecoration" to="/salads" >Salat</NavLink></li>
                 </ul>
            </div>
          </nav>*/
       )
    }
}


export default Menu;
