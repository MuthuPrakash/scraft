import { ADD_ORDER } from '../actions/types'

const initialState={
    order:{
        orderId:"",
        items: [],
        customer: {}
    }
}

export default function(state= initialState, action)
{
    switch(action.type){
        case ADD_ORDER:{
            return {
                ...state,
                order: {
                    orderId:action.payload.orderId,
                    customer: action.payload.customer,
                    items: action.payload.cartItems                    
                }
            }
        }
        default:
            return state;
    }
}