import React, {Component} from "react";
import {FaCartArrowDown } from 'react-icons/fa';
import "../css/icons.css";
import "../css/basket.css";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

class BasketIcon extends Component{
   render(){
     return(
       <NavLink to="/orders" className="">
         <FaCartArrowDown className="icons" />
        <span className="counterBasket ">{this.props.orderButton}</span>
       </NavLink>
     )
   }
}

const mapStateToProps = state => {
   return{
     orderButton: state.counterBasket

   }
}

export const BasketIconContainer = connect(mapStateToProps, null)(BasketIcon);
