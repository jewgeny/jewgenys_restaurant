import {createStore} from "redux";
import {pizzaArray} from "./data/pizzas";
import {burgerArray} from "./data/burgers";
import {saladArray} from "./data/salads";

const initialState = {
                     countersPizza: [0, 0, 0, 0, 0, 0,],
                     basket: [],
                     orderBox: false,
                     infoBox: true,
                     counterBasket: 0,
                     showBasket: false,
                     showPizzaStore: false,
                     orderIsZero: false,
                     thxAlert: false,
                     pizzaStorage: pizzaArray,
                     burgerStorage: burgerArray,
                     saladStorage: saladArray

                    };



const reducer = (state = initialState, action) => {

const copyOfStates = {...state};

  switch(action.type){

  case "INCREMENTPIZZA":
  var identButton = action.ev.target.getAttribute("ident");
  copyOfStates.countersPizza[identButton] = state.countersPizza[identButton] +1;
  return copyOfStates;

  case "DECREMENTPIZZA":

  var identButton = action.ev.target.getAttribute("ident");
  copyOfStates.countersPizza[identButton] = state.countersPizza[identButton] -1;
  if(state.countersPizza[identButton] < 1){
      state.countersPizza[identButton] = 0;
  }
  return copyOfStates;

  case "CHANGEVALUEPIZZA":
      const identValue = action.ev.target.getAttribute("ident");
      copyOfStates.countersPizza[identValue] = action.ev.target.value;
      return copyOfStates;


  case "ORDERBOX":
      copyOfStates.orderBox = !state.orderBox;
      copyOfStates.infoBox = !state.infoBox;
      copyOfStates.orderIsZero = state.orderIsZero = false;
      return copyOfStates;

  case "ORDERBUTTON":
    const pizza = action.ev.target.getAttribute("pizza");
    const price = action.ev.target.getAttribute("price");
    const image = action.ev.target.getAttribute("image");
    const titel = action.ev.target.getAttribute("titel");
    var identButton = action.ev.target.getAttribute("ident");
    const objects = {pizza: pizza,
                     price: price,
                     image: image,
                     titel: titel,
                     quantity: state.countersPizza[identButton]};
    copyOfStates.basket = [...state.basket, objects];

    if(state.basket.length > 0){
      state.showBasket = true;
    }else{
      state.showBasket = false;
    }
    return copyOfStates;


     return copyOfStates;

     case "DELETEORDER":
     copyOfStates.pizzaStorage = [];
     copyOfStates.counterOrder = state.counterOrder = 0;
     copyOfStates.showBasket = state.showBasket = false;
     return copyOfStates;

     case "CONTINUESHOPPING":
      copyOfStates.thxAlert = state.thxAlert = false;
      return copyOfStates;

  default:
  return state;


    }

}

export const changeValuePizza = ev => {
   return{
      type: "CHANGEVALUEPIZZA",
      ev: ev
   }
}


export const incCounterPizza = ev => {
   return{
     type: "INCREMENTPIZZA",
     ev: ev
   }
}

export const decCounterPizza = ev => {
  return{
    type: "DECREMENTPIZZA",
    ev: ev
  }
}


export const orderBox = (index) => {
   return{
     type: "ORDERBOX",
     index: index
   }
}

export const orderButton = (ev) => {
  return{
    type: "ORDERBUTTON",
    ev: ev
  }
}

export const deleteOrder = () => {
   return{
     type: "DELETEORDER"
   }
}

export const continueShopping = () => {
    return{
      type: "CONTINUESHOPPING"
    }
}





export const store = createStore(
  reducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
