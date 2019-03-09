import React, {Component} from "react";
import "../css/productImages.css";
import "../css/orders.css";
import {NavLink} from "react-router-dom";
import {incCounterPizza, decCounterPizza, decCounter, orderButtonPizza, continueShopping, changeValuePizza} from "../redux";
import {connect} from "react-redux";


class SinglePizza extends Component{
  render(){
     return(
      <div className="card">
         <h1 className="display-4 text-center my-4">{this.props.pizzaArray.titel}</h1>
         <div className="d-flex">
           <img src={this.props.pizzaArray.img} className="card-img-bottom productImg" />
           <p className="px-3">{this.props.pizzaArray.description}</p>
        </div>


      <div className="py-5 alert alert-secondary d-flex flex-column justify-content-between" role="alert">

            <span  style={{width: ""}} className="mb-3 mx-auto d-flex justify-content-around align-items-center">

            <div className="d-flex infoBox input-group">
                   <span className="input-group-btn">
                      <button ident={this.props.pizzaArray.id} onClick={this.props.decCounterPizza} className="btn btn-secondary" type="button">-</button>
                   </span>
                   <span className="d-flex align-items-center bg-white px-2">{this.props["countersPizza" + this.props.pizzaArray.id]}</span>
                   <span className="input-group-btn">
                      <button ident={this.props.pizzaArray.id} onClick={this.props.incCounterPizza} className="btn btn-secondary" type="button">+</button>
                   </span>
             </div>

              <button
                  image={this.props.pizzaArray.img}
                  pizza={this.props.pizzaArray.titel}
                  price={this.props.pizzaArray.price}
                  titel={this.props.pizzaArray.titel}
                  ident={this.props.pizzaArray.id}
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

        <NavLink to="/pizzas"><button className="btn btn-secondary">zurück zur Auswahl</button></NavLink>


     </div>
     )
  }
}

const mapStateToProps = state => {
  return{
     update: state.counterOrder,
     countersPizza0: state.countersPizza[0],
     countersPizza1: state.countersPizza[1],
     countersPizza2: state.countersPizza[2],
     countersPizza3: state.countersPizza[3],
     countersPizza4: state.countersPizza[4],
     countersPizza5: state.countersPizza[5],
  }
}

const mapStateToDispatch = dispatch => {
   return{
          incCounterPizza: (ev) => dispatch(incCounterPizza(ev)),
          decCounterPizza: (ev) => dispatch(decCounterPizza(ev)),
          setOrderButton: (index) => dispatch(orderButtonPizza(index)),
          continueShopping: () => dispatch(continueShopping()),
   }
}




export const SinglePizzaContainer = connect(mapStateToProps, mapStateToDispatch)(SinglePizza);
