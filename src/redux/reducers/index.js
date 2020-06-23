import { combineReducers } from  'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';
import productOverViewReducer from './productOverViewReducer';

export default combineReducers({
    currentProduct: productOverViewReducer,
    products: productReducer,
    cart: cartReducer,
    order: orderReducer
})