import React, {Component} from "react";
import "../css/buttons.css";
import {NavLink} from "react-router-dom";


class SaladButton extends Component{
  render(){
    return(
      <>
        <NavLink className="" to="/salads" >
            <button className="buttons my-2 btn btn-success">Weiter</button>
        </NavLink>


    </>
    )
  }
}


export default SaladButton;
