import React, {Component} from "react";
import {PizzaOrderContainer} from "./orders/pizzas";
import {deleteOrder} from "./redux";
import {connect} from "react-redux";

class Orders extends Component{
  calculateOrder(){
     return this.props.pizzaStorage.reduce((a,b) => a + this.props.counterOrder * b.price, 0);
  }

    render(){
       return(

       <>
         <div className="d-flex flex-column justify-content-center">
            <h3 className="mx-auto mb-5 display-4 text-center">Hier sind deine Bestellungen:</h3>
                <PizzaOrderContainer />
                <span className="d-flex flex-column justify-content-center">
                  <h3 className="my-5">Gesamtsumme: {this.calculateOrder()}€</h3>
                  <button onClick={this.props.deleteOrder} className="mx-auto btn btn-danger">Bestellung stornieren</button>
                </span>
            </div>
      </>

       )
    }
}

const mapStateToProps = state => {
   return{
      pizzaStorage: state.pizzaStorage,
      counterOrder: state.counterOrder
   }
}

const mapStateToDispatch = dispatch => {
   return{
     deleteOrder: () => dispatch(deleteOrder())
   }
}

export const OrdersContainer =  connect(mapStateToProps, mapStateToDispatch)(Orders);
