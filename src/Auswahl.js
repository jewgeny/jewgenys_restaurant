import React, {Component} from "react";
import pizza from "./images/pizzas.jpg";
import burger from "./images/burgers.jpg";
import salad from "./images/salads.jpg";
import "./css/auswahl.css";
import {connect} from "react-redux";
import PizzaButton from "./buttons/PizzaButton";
import BurgerButton from "./buttons/BurgerButton";
import SaladButton from "./buttons/SaladButton";


class Auswahl extends Component{
   render(){
      return(

        <div style={{marginTop: "10vw"}} className="container mobilAuswahl d-flex col-lg-12">

                <div className="card my-2 px-5 mx-2">
                   <h2 className="display-5 text-center">Pizzas</h2>
                    <img src={pizza} className="card-img-top" />
                    <PizzaButton />
                </div>
                <div className="card my-2 px-5 py-1 mx-2">
                   <h2 className="display-5 text-center">Burgers</h2>
                    <img src={burger} className="card-img-top" />
                    <BurgerButton />
                </div>
                <div className="card my-2 px-5 py-1 mx-2">
                   <h2 className="display-5 text-center">Salads</h2>
                   <img src={salad} className="card-img-top" />
                    <SaladButton />
                </div>

      </div>

      )
   }
}



export default Auswahl;
