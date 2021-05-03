import * as actionTypes from "../actions/actionTypes";

const initialState = {

    products: null,
    category: "all",
    cart: null,
    loading: true,
    showProduct: null
}

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.LOAD_PRODUCTS_START:
            return {
                ...state,
                products: [],
                loading: true
            }
        case actionTypes.LOAD_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.products,
                category: action.category,
                loading: false
            }
        case actionTypes.LOAD_PRODUCTS_FAILED:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case actionTypes.FILTER_PRODUCTS:
            return {
                ...state,
                category: action.category
            }
        case actionTypes.SHOW_PRODUCT:
            return {
                ...state,
                showProduct: action.product
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