import React, {Component} from "react";
import { FaHome} from 'react-icons/fa';
import "../css/icons.css";
import {NavLink} from "react-router-dom";


class HomeIcon extends Component{

   render(){
     return(
      <>
       <NavLink to="/">
           <FaHome className="icons" />
        </NavLink>

      </>
     )
   }
}

export default HomeIcon;
