import axios from "axios";
import * as actionTypes from "./actionTypes";

export const filterProducts = (category) => {
    return {
        type: actionTypes.FILTER_PRODUCTS,
        category: category
    };
};

export const showProduct = (product) => {
    return {
        type: actionTypes.SHOW_PRODUCT,
        product: product
    };
};


export const loadProductsStart = () => {
    return {
        type: "LOAD_PRODUCTS_START",
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
    return async (dispatch) => {
        try {
            const products = await axios.get(`https://fakestoreapi.com${query}`)
            let updatedProducts = []
            products.data.map((item => {
                return updatedProducts.push({...item, amount: 1})
            }))
            dispatch(loadProductsSuccess(updatedProducts))
        }
        catch(error) {
            dispatch(loadProductsFailed("Nepodarilo sa načítať produkty"))
        }
    }
}


