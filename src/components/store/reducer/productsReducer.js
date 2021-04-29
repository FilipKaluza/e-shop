import * as actionTypes from "../actions/actionTypes";

const initialState = {

    products: null,
    category: "all",
    cart: null,
    loading: false,
}

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.LOAD_PRODUCTS_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.LOAD_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.products,
                category: action.category
            }
        case actionTypes.LOAD_PRODUCTS_FAILED:
            return {
                ...state,
                error: action.error
            }
        case actionTypes.FILTER_PRODUCTS:
            return {
                ...state,
                category: action.category
            }
        case actionTypes.ADD_PRODUCTS_TO_CART:
            return {
                ...state,
                cart: action.productsInCart
            }
        case actionTypes.REMOVE_PRODUCTS_FROM_CART:
            return {
                ...state,
                cart: action.productsInCart
            }
        case actionTypes.CLEAR_CART:
            return {
                ...state,
                cart: null
            }
        default:
            return state
    }
}

export default productReducer;