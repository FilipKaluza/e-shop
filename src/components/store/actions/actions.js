import axios from "axios";
import * as actionTypes from "./actionTypes";

export const addProductsToCart = (productsInCart) => {
    return {
        type: actionTypes.ADD_PRODUCTS_TO_CART,
        productsInCart: productsInCart
    };
};


export const removeItem = (productsInCart) => {
    return {
        type: actionTypes.ADD_PRODUCTS_TO_CART,
        productsInCart: productsInCart
    };
};

export const clearCart = () => {
    return {
        type: actionTypes.REMOVE_PRODUCTS_FROM_CART
    };
};

export const filterProducts = (category) => {
    return {
        type: actionTypes.FILTER_PRODUCTS,
        category: category
    };
};


const loadProductStart = () => {
    return {
        type: "LOAD_PRODUCT_START",
    };
};

const loadProductsSuccess = (products) => {
    return {
        type: "LOAD_PRODUCTS_SUCCESS",
        products: products,
        category: "all"
    };
};

const loadProductsFailed = (error) => {
    return {
        type: "LOAD_PRODUCTS_FAILED",
        error: error
    };
};

export const loadProducts = (query) => {
    loadProductStart()
    return async (dispatch) => {
        try {
            const products = await axios.get(`https://fakestoreapi.com/${query}`)
            dispatch(loadProductsSuccess(products.data))
        }
        catch(error) {
            dispatch(loadProductsFailed("Nepodarilo sa načítať produkty"))
        }
    }
}


