import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import logo from './logo.svg';
import "./css/body.css";
import {saladArray} from "./data/salads";
import {burgerArray} from "./data/burgers";
import {pizzaArray} from "./data/pizzas";
import Auswahl from "./Auswahl";
import NavList from "./navList";
import {PizzasContainer} from "./Pizzas";
import {BurgersContainer} from "./Burgers";
import {SaladsContainer} from "./Salads";
import {OrdersContainer} from "./Orders";
import {SingleSaladContainer} from "./singleProducts/SingleSalad";
import {SingleBurgerContainer} from "./singleProducts/SingleBurger";
import {SinglePizzaContainer} from "./singleProducts/SinglePizza";


class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <>

      <div className="container">
        <h1 style={{width: "40vw", margin: "0 auto"}}  className="bg-light text-center my-3">JEWGENY'S RESTAURANT</h1>

       <NavList />
         <div className="my-3 jumbotron d-flex justify-content-around">
           <Route exact path="/" render={() => <Auswahl />} />
             <Route exact path="/pizzas" render={() => <PizzasContainer />} />
             <Route exact path="/burgers" render={() => <BurgersContainer />} />
             <Route exact path="/salads" render={() => <SaladsContainer />} />
             <Route path="/orders" render={() => <OrdersContainer />} />

             <Route path="/salads/singlesalad/:id" render={({match}) => {
                 const selectedIndex = match.params.id;
                 return <SingleSaladContainer saladArray={saladArray[selectedIndex]} />
             }} />

             <Route path="/burgers/singleburger/:id" render={({match}) => {
                const selectedIndex = match.params.id;
                 return <SingleBurgerContainer burgerArray={burgerArray[selectedIndex]} />
             }} />

             <Route path="/pizzas/singlepizza/:id" render={({match}) => {
               const selectedIndex = match.params.id;
               return <SinglePizzaContainer pizzaArray={pizzaArray[selectedIndex]} />
             }} />


           </div>
        </div>
      </>
      </BrowserRouter>
    );
  }
}


export default App;
