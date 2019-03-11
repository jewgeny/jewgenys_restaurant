import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import logo from './logo.svg';
import "./css/body.css";
import {saladArray} from "./data/salads";
import {burgerArray} from "./data/burgers";
import {pizzaArray} from "./data/pizzas";
import Auswahl from "./Auswahl";
import Menu from "./menu";
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
          <Menu />
          <Route exact path="/" render={() => <Auswahl />} />

          <div className="container">
            <Route exact path="/orders" render={() => <OrdersContainer />} />
             <Route exact path="/pizzas" render={() => <PizzasContainer />} />
             <Route exact path="/burgers" render={() => <BurgersContainer />} />
             <Route exact path="/salads" render={() => <SaladsContainer />} />


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
      </>
      </BrowserRouter>
    );
  }
}


export default App;
