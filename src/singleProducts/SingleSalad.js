import React, {Component} from "react";
import "../css/productImages.css";
import {NavLink} from "react-router-dom";
import {orderButtonSalat, continueShopping, incCounterSalat, decCounterSalat} from "../redux";
import {connect} from "react-redux";


class SingleSalad extends Component{
  render(){
     return(
      <div className="mt-5 card">
         <h1 className="display-4 text-center my-4">{this.props.saladArray.titel}</h1>
         <div className="d-flex mobileSingleproduct">
           <img src={this.props.saladArray.img} className="card-img-top productImg" />
           <p className="px-3">{this.props.saladArray.description}</p>
        </div>


        <div className="py-5 alert alert-secondary d-flex flex-column justify-content-between" role="alert">

              <div  style={{width: ""}} className="mb-3 mx-auto d-flex justify-content-around align-items-center">

              <div className="d-flex infoBox input-group">
                     <span className="input-group-btn">
                        <button ident={this.props.saladArray.id} onClick={this.props.decCounterSalat} className="btn btn-secondary" type="button">-</button>
                     </span>
                     <span className="d-flex align-items-center bg-white px-3">{this.props["countersSalat" + this.props.saladArray.id]}</span>
                     <span className="input-group-btn">
                        <button ident={this.props.saladArray.id} onClick={this.props.incCounterSalat} className="btn btn-secondary" type="button">+</button>
                     </span>
               </div>

                <button
                    image={this.props.saladArray.img}
                    salad={this.props.saladArray.titel}
                    price={this.props.saladArray.price}
                    titel={this.props.saladArray.titel}
                    ident={this.props.saladArray.id}
                    onClick={this.props.setOrderButton}
                    className="infoBox ml-5 btn btn-success float-right">
                    Bestätigen
                  </button>

              </div>


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

        <NavLink to="/salads"><button className="btn btn-secondary">zurück zur Auswahl</button></NavLink>


     </div>
     )
  }
}

const mapStateToProps = state => {
  return{
    update: state.counterOrder,
    salatStorage: state.salatStorage,
    countersSalat0: state.countersSalat[0],
    countersSalat1: state.countersSalat[1],
    countersSalat2: state.countersSalat[2],
    countersSalat3: state.countersSalat[3],
    countersSalat4: state.countersSalat[4],
    countersSalat5: state.countersSalat[5],
  }
}

const mapStateToDispatch = dispatch => {
   return{
     incCounterSalat: (ev) => dispatch(incCounterSalat(ev)),
     decCounterSalat: (ev) => dispatch(decCounterSalat(ev)),
     setOrderButton: (index) => dispatch(orderButtonSalat(index)),
     continueShopping: () => dispatch(continueShopping()),
   }
}




export const SingleSaladContainer = connect(mapStateToProps, mapStateToDispatch)(SingleSalad);
