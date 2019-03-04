import {createStore} from "redux";
import {pizzaArray} from "./data/pizzas";
import {burgerArray} from "./data/burgers";
import {saladArray} from "./data/salads";

const initialState = {
                     counterOrder: 0,
                     counter: 0,
                     counter0: 0,
                     counter1: 0,
                     counter2: 0,
                     counter3: 0,
                     counter4: 0,
                     counter5: 0,
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

  //INCCREMENT
    case "INC1":
     copyOfStates.counte0 = state.counter0 +1;
     copyOfStates.orderIsZero = state.orderIsZero = false;
    return copyOfStates;

    case "INC2":
    copyOfStates.counter1 = state.counter1 +1;
    copyOfStates.orderIsZero = state.orderIsZero = false;
    return copyOfStates;

    case "INC3":
    copyOfStates.counter2 = state.counter2 +1;
    copyOfStates.orderIsZero = state.orderIsZero = false;
    return copyOfStates;

    case "INC4":
    copyOfStates.counter3 = state.counter3 +1;
    copyOfStates.orderIsZero = state.orderIsZero = false;
    return copyOfStates;

    case "INC5":
    copyOfStates.counter4 = state.counter4 +1;
    copyOfStates.orderIsZero = state.orderIsZero = false;
    return copyOfStates;

    case "INC6":
    copyOfStates.counter5 = state.counter5 +1;
    copyOfStates.orderIsZero = state.orderIsZero = false;
    return copyOfStates;

//DECREMENT
case "DEC1":
 copyOfStates.counte0 = state.counter0 -1;
 copyOfStates.orderIsZero = state.orderIsZero = false;
return copyOfStates;

case "DEC2":
copyOfStates.counter1 = state.counter1 -1;
copyOfStates.orderIsZero = state.orderIsZero = false;
return copyOfStates;

case "DEC3":
copyOfStates.counter2 = state.counter2 -1;
copyOfStates.orderIsZero = state.orderIsZero = false;
return copyOfStates;

case "DEC4":
copyOfStates.counter3 = state.counter3 -1;
copyOfStates.orderIsZero = state.orderIsZero = false;
return copyOfStates;

case "DEC5":
copyOfStates.counter4 = state.counter4 -1;
copyOfStates.orderIsZero = state.orderIsZero = false;
return copyOfStates;

case "DEC6":
copyOfStates.counter5 = state.counter5 -1;
copyOfStates.orderIsZero = state.orderIsZero = false;
return copyOfStates;



  case "ORDERBOX":
      copyOfStates.orderBox = !state.orderBox;
      copyOfStates.infoBox = !state.infoBox;
      copyOfStates.orderIsZero = state.orderIsZero = false;
      return copyOfStates;

  case "ORDERBUTTON":
         copyOfStates.orderIsZero = state.orderIsZero = false;

         const targetElementIdentifier = action.index.target.getAttribute('ident');
           switch(targetElementIdentifier){
              case "pizzas":
              if(state.counterOrder < 1){
                copyOfStates.orderIsZero = state.orderIsZero = true;
              }

              else{
               copyOfStates.thxAlert = state.thxAlert = true;
               copyOfStates.counterBasket = state.counterBasket += 1;
               copyOfStates.showBasket = state.showBasket = true;
               copyOfStates.showPizzaStore = state.showPizzaStore = true;
              }

                copyOfStates.pizzaStorage = state.pizzaStorage.map((elem, index) => {
                if(action.index === index){
                  return elem;
                }
                return elem;
              })

              return copyOfStates;

              default:
              return state;
           }
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


export const incCounter = (ev) => {
  switch(ev.target.getAttribute("identinc")){
              case 0:
              return {
                 type: "INC1",
                 ev: ev
              }

              case 1:
              return {
                 type: "INC2",
                 ev: ev
              }

              case 2:
              return {
                 type: "INC3",
                 ev: ev
              }

              case 3:
              return {
                 type: "INC4",
                 ev: ev
              }

              case 4:
              return {
                 type: "INC5",
                 ev: ev
              }

              case 5:
              return {
                 type: "INC6",
                 ev: ev
              }
  }

}

export const decCounter = (ev) => {
  switch(ev.target.getAttribute("identdec")){
              case 0:
              return {
                 type: "DEC1",
                 ev: ev
              }

              case 1:
              return {
                 type: "DEC2",
                 ev: ev
              }

              case 2:
              return {
                 type: "DEC3",
                 ev: ev
              }

              case 3:
              return {
                 type: "DEC4",
                 ev: ev
              }

              case 4:
              return {
                 type: "DEC5",
                 ev: ev
              }

              case 5:
              return {
                 type: "DEC6",
                 ev: ev
              }
  }
}

export const orderBox = (index) => {
   return{
     type: "ORDERBOX",
     index: index
   }
}

export const orderButton = (index) => {
  return{
    type: "ORDERBUTTON",
    index: index
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
