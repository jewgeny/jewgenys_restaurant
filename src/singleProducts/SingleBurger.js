import React, {Component} from "react";
import "../css/productImages.css";
import {NavLink} from "react-router-dom";
import {orderButtonBurger, continueShopping, incCounterBurger, decCounterBurger } from "../redux";
import {connect} from "react-redux";


class SingleBurger extends Component{
  render(){
     return(
      <div className="card">
         <h1 className="display-4 text-center my-4">{this.props.burgerArray.titel}</h1>
         <div className="d-flex">
           <img src={this.props.burgerArray.img} className="card-img-bottom productImg" />
           <p className="px-3">{this.props.burgerArray.description}</p>
        </div>


        <div className="py-5 alert alert-secondary d-flex flex-column justify-content-between" role="alert">

              <span  style={{width: ""}} className="mb-3 mx-auto d-flex justify-content-around align-items-center">

              <div className="d-flex infoBox input-group">
                     <span className="input-group-btn">
                        <button ident={this.props.burgerArray.id} onClick={this.props.decCounterBurger} className="btn btn-secondary" type="button">-</button>
                     </span>
                     <span className="d-flex align-items-center bg-white px-2">{this.props["countersBurger" + this.props.burgerArray.id]}</span>
                     <span className="input-group-btn">
                        <button ident={this.props.burgerArray.id} onClick={this.props.incCounterBurger} className="btn btn-secondary" type="button">+</button>
                     </span>
               </div>

                <button
                    image={this.props.burgerArray.img}
                    burger={this.props.burgerArray.titel}
                    price={this.props.burgerArray.price}
                    titel={this.props.burgerArray.titel}
                    ident={this.props.burgerArray.id}
                    onClick={this.props.setOrderButton}
                    className="infoBox ml-5 btn btn-success float-right">
                    Bestätigen
                  </button>

              </span>


              <div className="d-flex flex-column justify-content-between">
                <div className="divBoxZero alert alert-warning">Die Bestellung muss größer als 1 sein!</div>
                <div className="dankeBox bg-light alert justify-content-between align-items-center">
                        <p className="p-0 m-0 lead text-success">Danke für deine Bestellung!</p>
                          <span className="d-flex">
                              <button onClick={this.props.continueShopping} className="btn btn-secondary mx-3">Weiter bestellen</button>
                              <NavLink className="float-right" to="/orders">
                              <button onClick={this.props.continueShopping}  className="btn btn-primary">zu Kasse</button>
                              </NavLink>
                         </span>
                  </div>

             </div>
          </div>

        <NavLink to="/burgers"><button className="btn btn-secondary">zurück zur Auswahl</button></NavLink>


     </div>
     )
  }
}

const mapStateToProps = state => {
  return{
    update: state.counterOrder,
    counter: state.counter,
    pizzaStorage: state.pizzaStorage,
    countersBurger0: state.countersBurger[0],
    countersBurger1: state.countersBurger[1],
    countersBurger2: state.countersBurger[2],
    countersBurger3: state.countersBurger[3],
    countersBurger4: state.countersBurger[4],
    countersBurger5: state.countersBurger[5],
  }
}

const mapStateToDispatch = dispatch => {
   return{
     incCounterBurger: (ev) => dispatch(incCounterBurger(ev)),
     decCounterBurger: (ev) => dispatch(decCounterBurger(ev)),
     setOrderButton: (index) => dispatch(orderButtonBurger(index)),
     continueShopping: () => dispatch(continueShopping()),
   }
}




export const SingleBurgerContainer = connect(mapStateToProps, mapStateToDispatch)(SingleBurger);
