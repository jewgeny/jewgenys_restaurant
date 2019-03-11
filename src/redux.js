import {createStore} from "redux";
import {pizzaArray} from "./data/pizzas";
import {burgerArray} from "./data/burgers";
import {saladArray} from "./data/salads";

const initialState = {
                     countersPizza: [0, 0, 0, 0, 0, 0,],
                     countersBurger: [0, 0, 0, 0, 0, 0],
                     countersSalat: [0, 0, 0, 0, 0, 0],
                     basket: [],
                     orderBox: false,
                     counterBasket: 0,
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
          var divElement = document.querySelectorAll(".divBoxZero");

          for(let i = 0; i < divElement.length; i++){
              if(divElement[i].classList.contains('showBox')){
                divElement[i].classList.remove('showBox');
              }
         }
         return copyOfStates;

         case "INCREMENTBURGER":
         var identButton = action.ev.target.getAttribute("ident");
         copyOfStates.countersBurger[identButton] = state.countersBurger[identButton] +1;
         var divElement = document.querySelectorAll(".divBoxZero");

         for(let i = 0; i < divElement.length; i++){
             if(divElement[i].classList.contains('showBox')){
               divElement[i].classList.remove('showBox');
             }
        }
        return copyOfStates;

        case "INCREMENTSALAT":
        var identButton = action.ev.target.getAttribute("ident");
        copyOfStates.countersSalat[identButton] = state.countersSalat[identButton] +1;
        var divElement = document.querySelectorAll(".divBoxZero");

        for(let i = 0; i < divElement.length; i++){
            if(divElement[i].classList.contains('showBox')){
              divElement[i].classList.remove('showBox');
            }
       }
       return copyOfStates;

          case "DECREMENTPIZZA":

          var identButton = action.ev.target.getAttribute("ident");
          copyOfStates.countersPizza[identButton] = state.countersPizza[identButton] -1;
          if(state.countersPizza[identButton] < 1){
              state.countersPizza[identButton] = 0;
          }
          return copyOfStates;

          case "DECREMENTBURGER":

          var identButton = action.ev.target.getAttribute("ident");
          copyOfStates.countersBurger[identButton] = state.countersBurger[identButton] -1;
          if(state.countersBurger[identButton] < 1){
              state.countersBurger[identButton] = 0;
          }
          return copyOfStates;

          case "DECREMENTSALAT":

          var identButton = action.ev.target.getAttribute("ident");
          copyOfStates.countersSalat[identButton] = state.countersSalat[identButton] -1;
          if(state.countersSalat[identButton] < 1){
              state.countersSalat[identButton] = 0;
          }
          return copyOfStates;

          /*case "CHANGEVALUEPIZZA":
              const identValue = action.ev.target.getAttribute("ident");
              copyOfStates.countersPizza[identValue] = action.ev.target.value;
              return copyOfStates;
         */


          case "ORDERBUTTONPIZZA":
            const pizza = action.ev.target.getAttribute("pizza");
            const price = action.ev.target.getAttribute("price");
            const image = action.ev.target.getAttribute("image");
            const titel = action.ev.target.getAttribute("titel");
            var identButton = action.ev.target.getAttribute("ident");
            const objectsPizza = {pizza: pizza,
                             price: price,
                             image: image,
                             titel: titel,
                             quantity: state.countersPizza[identButton]};

            var divElement = document.querySelectorAll(".divBoxZero");
            var divElementDanke = document.querySelectorAll(".dankeBox");


            /*const itemFoundPizza = copyOfStates.basket.find(item => item.pizza === pizza); // If found will return the object
            if(itemFoundPizza){
              itemFoundPizza.quantity += copyOfStates.countersPizza[identButton];
            }
            */
            
            if(state.countersPizza[identButton] < 1){
                for(let i = 0; i < divElement.length; i++){
                    if(divElement[i]){
                      divElement[i].classList.add("showBox");
                    }
                }
            }
            else{
              copyOfStates.basket = [...state.basket, objectsPizza];
              state.countersPizza[identButton] = 0;
              copyOfStates.counterBasket = state.counterBasket +1;

              for(let a = 0; a < divElementDanke.length; a++){
                if(divElementDanke[a]){
                    divElementDanke[a].classList.add("showBoxDanke");
                  }
                 }

            }

            return copyOfStates;


            case "ORDERBUTTONBURGER":
              const burger = action.ev.target.getAttribute("burger");
              const priceBurger = action.ev.target.getAttribute("price");
              const imageBurger = action.ev.target.getAttribute("image");
              const titelBurger = action.ev.target.getAttribute("titel");
              var identButton = action.ev.target.getAttribute("ident");

              var divElement = document.querySelectorAll(".divBoxZero");
              var divElementDanke = document.querySelectorAll(".dankeBox");

              const objectsBurger = {burger: burger,
                               price: priceBurger,
                               image: imageBurger,
                               titel: titelBurger,
                               quantity: state.countersBurger[identButton]};

              const itemFoundBurger = copyOfStates.basket.find(item => item.burger === burger);



              if(state.countersBurger[identButton] < 1){
                  for(let i = 0; i < divElement.length; i++){
                      if(divElement[i]){
                        divElement[i].classList.add("showBox");
                      }
                  }
              }
              else{
                state.countersBurger[identButton] = 0;
                copyOfStates.counterBasket = state.counterBasket +1;

                copyOfStates.basket = [...state.basket, objectsBurger];

                for(let a = 0; a < divElementDanke.length; a++){
                  if(divElementDanke[a]){
                      divElementDanke[a].classList.add("showBoxDanke");
                    }
                   }
              }

              if(state.basket.length > 0){
                state.showBasket = true;
              }else{
                state.showBasket = false;
              }
              return copyOfStates;

              case "ORDERBUTTONSALAT":
                const salat = action.ev.target.getAttribute("salat");
                const priceSalat = action.ev.target.getAttribute("price");
                const imageSalat = action.ev.target.getAttribute("image");
                const titelSalat = action.ev.target.getAttribute("titel");
                var identButton = action.ev.target.getAttribute("ident");

                var divElement = document.querySelectorAll(".divBoxZero");
                var divElementDanke = document.querySelectorAll(".dankeBox");

                const objectsSalat = {salat: salat,
                                 price: priceSalat,
                                 image: imageSalat,
                                 titel: titelSalat,
                                 quantity: state.countersSalat[identButton]};

                if(state.countersSalat[identButton] < 1){
                    for(let i = 0; i < divElement.length; i++){
                        if(divElement[i]){
                          divElement[i].classList.add("showBox");
                        }
                    }
                }
                else{
                  state.countersSalat[identButton] = 0;
                  copyOfStates.counterBasket = state.counterBasket +1;

                  copyOfStates.basket = [...state.basket, objectsSalat];

                  for(let a = 0; a < divElementDanke.length; a++){
                    if(divElementDanke[a]){
                        divElementDanke[a].classList.add("showBoxDanke");
                      }
                     }
                }

                if(state.basket.length > 0){
                  state.showBasket = true;
                }else{
                  state.showBasket = false;
                }
                return copyOfStates;


             case "DELETEORDER":
             copyOfStates.basket = [];
             copyOfStates.counterBasket = state.counterBasket = 0;
             return copyOfStates;

             case "DELETEPRODUCT":

             var buttonIndex = action.ev.target.getAttribute("button");
             const orders = Object.assign([], state.basket);
             orders.splice(buttonIndex, 1);
             copyOfStates.counterBasket = state.counterBasket -1;
             copyOfStates.basket = orders;
             return copyOfStates;


             case "CONTINUESHOPPING":
              copyOfStates.infoBox = state.infoBox = true;
              copyOfStates.thxAlert = state.thxAlert = false;

              var divElementDanke = document.querySelectorAll(".dankeBox");

              for(let i = 0; i < divElementDanke.length; i++){
                  if(divElementDanke[i].classList.contains('showBoxDanke')){
                    divElementDanke[i].classList.remove('showBoxDanke');
                  }
             }

              return copyOfStates;

          default:
          return state;


    }

}

/*export const changeValuePizza = ev => {
   return{
      type: "CHANGEVALUEPIZZA",
      ev: ev
   }
}*/

export const incCounterPizza = ev => {
   return{
     type: "INCREMENTPIZZA",
     ev: ev
   }
}

export const incCounterBurger = ev => {
   return{
     type: "INCREMENTBURGER",
     ev: ev
   }
}

export const incCounterSalat = ev => {
   return{
     type: "INCREMENTSALAT",
     ev: ev
   }
}

export const decCounterPizza = ev => {
  return{
    type: "DECREMENTPIZZA",
    ev: ev
  }
}

export const decCounterBurger = ev => {
  return{
    type: "DECREMENTBURGER",
    ev: ev
  }
}

export const decCounterSalat = ev => {
  return{
    type: "DECREMENTSALAT",
    ev: ev
  }
}

export const orderButtonPizza = (ev) => {
  return{
    type: "ORDERBUTTONPIZZA",
    ev: ev
  }
}

export const orderButtonBurger = (ev) => {
  return{
    type: "ORDERBUTTONBURGER",
    ev: ev
  }
}

export const orderButtonSalat = (ev) => {
  return{
    type: "ORDERBUTTONSALAT",
    ev: ev
  }
}


export const deleteProduct = (ev) => {
   return{
     type: "DELETEPRODUCT",
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


export const store = createStore(reducer);
