import React, {Component} from "react";
import "./css/subimages.css";
import {burgerArray} from "./data/burgers";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";


class Burgers extends Component{


   renderAllBurgers(){
        return    this.props.burgerStorage.map((elem, index) => {
                     return(
                      <div key={index} className="col-sm-12 col-lg-3 card m-3">
                         <h3 className="text-center">{elem.titel}</h3>
                         <img className="card-img-top" src={elem.img} />
                         <p className="lead text-center">Preis: <b>{Number(elem.price).toFixed(2)} EUR</b></p>

                               <NavLink className="mx-auto" to={"/burgers/singleburger/" + index}>
                                    <button className="px-5 btn btn-secondary my-1">Info</button>
                               </NavLink>
                      </div>
                     )
                   })}
   render(){

     return(
      <>
         <h2 className="mt-5 pt-5 text-center text-light display-3">Burgers</h2>
          <div className="d-flex flex-wrap justify-content-center my-3">
             {this.renderAllBurgers()}
          </div>
     </>
     )
   }
}

const mapStateToProps = state => {
  return{
     burgerStorage: state.burgerStorage
  }
}



export const BurgersContainer = connect(mapStateToProps, null)(Burgers);
