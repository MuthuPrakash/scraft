import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from '../actions/types';

const initialState ={
    productCart:[],
    total: 0
};

export default function(state= initialState, action)
{
    switch(action.type){
        case ADD_TO_CART:{
            return{
                ...state, 
                productCart: [action.payload, ...state.cart],
                total: state.total + action.payload.cost
            }
        }
        case REMOVE_FROM_CART:{
            return {
                ...state,
                productCart: state.productCart.filter((item, index)=> {
                    return item.productCode != action.payload.productCode
                }), 
                total: state.total - action.payload.item.cost
            }
        }
        case EMPTY_CART:{
            return {
                ...state,
                productCart:[],
                total:0
            }
        }
        default:
            return state;
    }
}