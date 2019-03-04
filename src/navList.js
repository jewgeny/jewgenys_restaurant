import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import HomeIcon from "./icons/Home";
import {BasketIconContainer} from "./icons/Basket";
import "./css/links.css";

class NavList extends Component{
    render(){
       return(
         <ul className="position-sticky fixed-top d-flex mx-0 p-2 justify-content-between bg-dark">
          <HomeIcon />
            <span className="d-flex">
               <NavLink className="textDecoration" to="/pizzas" >
                 <li className="hoverLink nav-link text-white">Pizzas</li>
               </NavLink>
               <NavLink className="textDecoration" to="/burgers" >
                 <li className="hoverLink nav-link text-white">Burgers</li>
               </NavLink>
               <NavLink className="textDecoration" to="/salads" >
                 <li className="hoverLink nav-link text-white">Salads</li>
               </NavLink>
              </span>
              <BasketIconContainer />
            </ul>
       )
    }
}

export default NavList;
