import React, {Component} from "react";
import "../css/buttons.css";
import {NavLink} from "react-router-dom";


class BurgerButton extends Component{
  render(){
    return(
      <>
        <NavLink className="" to="/burgers" >
            <button className="buttons my-2 btn btn-success">Weiter</button>
        </NavLink>


    </>
    )
  }
}


export default BurgerButton;
