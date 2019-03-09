import React, {Component} from "react";
import {deleteOrder, deleteProduct} from "./redux";
import {connect} from "react-redux";

class Orders extends Component{
  calculateOrder(){
     return this.props.orders.reduce((a,b) => a + b.quantity * b.price, 0);
  }

  deleteAllOrders(){

  }


    render(){
       return(

       <>
         <div className="d-flex flex-column justify-content-center">
            <h3 className="mx-auto mb-5 display-4 text-center">Hier sind deine Bestellungen:</h3>
               {this.props.orders.map((elem, index) => {
                  return(
                    <div test={index} key={index} className="bg-white d-flex flex-column py-0 my-3">
                       <div  className="d-flex justify-content-between align-items-center py-0 my-0">
                          <img className="my-0 py-0" style={{width: "20%"}} src={elem.image} />
                          <ul className="ml-1 d-flex flex-column">
                             <h3 className="float-left display-4">{elem.titel}</h3>
                             <li className="ml-3">Preis: {elem.price} €</li>
                             <li className="ml-3">Anzahl: {elem.quantity}</li>
                          </ul>
                          <button button={index}  onClick={this.props.deleteProduct} className="py-1 align-self-end mt-1 btn btn-danger">Bestellung stornieren</button>
                       </div>
                    </div>
                  )
               })

               }
                <span className="d-flex flex-column justify-content-center">
                 <h3 className="my-5">Gesamtsumme: {this.calculateOrder().toFixed(2)}€</h3>

                <button onClick={this.props.deleteOrder} className="mx-auto btn btn-danger">Alle Bestellungen stornieren</button>
                </span>
            </div>
      </>

       )
    }
}

const mapStateToProps = state => {
   return{
      pizzaStorage: state.pizzaStorage,
      counterOrder: state.counterOrder,
      orders: state.basket
   }
}

const mapStateToDispatch = dispatch => {
   return{
     deleteOrder: () => dispatch(deleteOrder()),
     deleteProduct: (ev) => dispatch(deleteProduct(ev))
   }
}

export const OrdersContainer =  connect(mapStateToProps, mapStateToDispatch)(Orders);
