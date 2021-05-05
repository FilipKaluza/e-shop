import * as actionTypes from "../actions/actionTypes";

const initialState = 
    {
        cart: [],
        amount: 0,
        total: 0,
    }


const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case actionTypes.INCREASE:
          return {
            ...state, 
            cart: state.cart.map((item) => {

                  if (item.id === action.payload) {
                      item.amount++;
                  } 
                  return item;               
            })
        }
        case actionTypes.DECREASE:
            return {
                ...state, cart: state.cart.map((item) => {
                  if (item.id === action.payload.id) {
                    if (item.amount === 0) {
                      return item;
                    } else {
                      item.amount--;
                    }
                  }
                  return item;
                })
              }
        case actionTypes.REMOVE:
            return {...state, cart: state.cart.filter(item => item.id !== action.payload.id)}
        case actionTypes.CLEAR:
            return { ...state, cart: [] };
        case actionTypes.GET_TOTAL_PRICE:
            let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
                const { price, amount } = cartItem;
                cartTotal.amount += amount;
                cartTotal.total += Math.floor(amount * price);
                return cartTotal;
            }, { amount: 0, total: 0 });
            return { ...state, total, amount };
        default:
            return state
    };
};

export default cartReducer;