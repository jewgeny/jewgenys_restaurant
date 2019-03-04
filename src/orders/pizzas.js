import React,{Component} from "react";
import {connect} from "react-redux";


class PizzaOrder extends Component{

  renderPizzas(){
     return this.props.pizzaStorage.map((elem, index) => {
          return (
            <div key={index} className="bg-white my-2 d-flex align-items-center">
                <img src={elem.img} className="mr-5 imgOrder card-img-top" />
                  <div className="d-flex flex-column">
                      <h4 className="">{elem.titel}</h4>
                      <p className="lead">Einzelpreis: {Number(elem.price).toFixed(2)}€</p>
                      <p className="lead">Bestellungen: {this.props.counterOrder}</p>
                  </div>
            </div>
          )
       })
     }

   render(){
     return(
       <>
         {this.props.showPizzaStore &&
           <>
            <div>{this.renderPizzas()}</div>
          </>

         }

      </>
     )
   }
}

const mapStateToProps = state => {
   return{
      pizzaStorage: state.pizzaStorage,
      showPizzaStore: state.showPizzaStore,
      counterOrder: state.counterOrder
   }
}



export const PizzaOrderContainer = connect(mapStateToProps, null)(PizzaOrder);
