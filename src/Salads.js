import React, {Component} from "react";
import "./css/subimages.css";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";


class Salads extends Component{


   renderAllSalads(){
        return    this.props.saladStorage.map((elem, index) => {
                     return(
                      <div key={index} className="col-sm-12 col-lg-3 card m-3">
                         <h3 className="text-center">{elem.titel}</h3>
                         <img className="card-img-top" src={elem.img} />
                         <p className="lead text-center">Preis: <b>{Number(elem.price).toFixed(2)} EUR</b></p>

                               <NavLink className="mx-auto" to={"/salads/singlesalad/" + index}>
                                    <button className="px-5 btn btn-secondary my-1">Info</button>
                               </NavLink>

                      </div>
                     )
                   })}
   render(){

     return(
       <>
         <h2 className="mt-5 pt-5 text-light text-center display-3">Salate</h2>
          <div className="d-flex flex-wrap justify-content-center my-3">
             {this.renderAllSalads()}
          </div>
      </>
     )
   }
}

const mapStateToProps = state => {
  return{
     saladStorage: state.saladStorage
  }
}



export const SaladsContainer = connect(mapStateToProps, null)(Salads);
