import {SELECT_PRODUCT_ITEM, SWITCH_PRODUCT_BG_IMAGE} from './types';

export const switchProductListSelection = (imageUrl) => dispatch => {
     dispatch({
        type: SWITCH_PRODUCT_BG_IMAGE,
        payload: imageUrl
    })
}

export const selectProductItem = (productItem) => dispatch => {
    console.log(productItem)
     dispatch({
        type: SELECT_PRODUCT_ITEM,
        payload: productItem
    })
}