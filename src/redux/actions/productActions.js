import {FETCH_PRODUCTS, APPLY_FILTER} from './types';

export const fetchProducts = () => dispatch => {
    const products =  require('../../data/productsList.json').products;
    console.log("fsdfsdfsdf :" +products)
     dispatch({
        type: FETCH_PRODUCTS,
        payload: products
    })
}

export const applyFilter = (categoryCode) => dispatch => {
     dispatch({
        type: APPLY_FILTER,
        payload: categoryCode
    })
}