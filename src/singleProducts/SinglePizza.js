import React, {Component} from "react";
import "../css/productImages.css";
import {NavLink} from "react-router-dom";
import {orderBox, incCounter, decCounter, orderButton, continueShopping} from "../redux";
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

            <span  style={{width: "30vw"}} className="mb-3 mx-auto d-flex justify-content-around align-items-center">
                <button identdec={this.props.pizzaArray.id} className="btn btn-secondary mx-1">-</button>
                <p className="lead text-center my-1 sizeP">{this.props.pizzaArray.counter}</p>
                <button identinc={this.props.pizzaArray.id} onClick={this.props.incCounter} className="btn btn-secondary">+</button>
                <button onClick={this.props.setOrderButton} className="btn btn-success float-right">Bestätigen</button>
            </span>

            <div className="d-flex flex-column justify-content-between">
                {this.props.orderIsZero && <div className="alert alert-warning">Die Bestellung muss größer als 0 sein!</div>}
                {this.props.thxAlert && <div className="bg-light alert justify-content-between d-flex align-items-center">
                      <p className="p-0 m-0 lead">Danke für deine Bestellung!</p>
                        <span className="d-flex">
                            <button onClick={this.props.continueShopping} className="btn btn-secondary mx-3">Weiter einkaufen</button>
                            <NavLink className="float-right" to="/orders">
                            <button onClick={this.props.continueShopping}  className="btn btn-primary">zu Kasse</button>
                            </NavLink>
                       </span>
                </div>}

           </div>
        </div>

        <NavLink to="/pizzas"><button className="btn btn-secondary">zurück zur Auswahl</button></NavLink>


     </div>
     )
  }
}

const mapStateToProps = state => {
  return{
     orderBox: state.orderBox,
     update: state.counterOrder,
     counter: state.counter,
     infoBox: state.infoBox,
     orderIsZero: state.orderIsZero,
     pizzaStorage: state.pizzaStorage,
     thxAlert: state.thxAlert
  }
}

const mapStateToDispatch = dispatch => {
   return{enterBox: (index) => dispatch(orderBox(index)),
          incCounter: (index) => dispatch(incCounter(index)),
          decCounter: (index) => dispatch(decCounter()),
          setOrderButton: (index) => dispatch(orderButton(index)),
          continueShopping: () => dispatch(continueShopping()),
   }
}




export const SinglePizzaContainer = connect(mapStateToProps, mapStateToDispatch)(SinglePizza);
