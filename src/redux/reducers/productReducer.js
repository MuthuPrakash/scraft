import { FETCH_PRODUCTS, APPLY_FILTER } from '../actions/types';

const initialState = {
    productList:[],
    activeFilterProducts:[],
    currentFilterText: ""
};

export default function(state= initialState, action)
{
    switch(action.type){
        case FETCH_PRODUCTS:{
            return {
                ...state, 
                productList: action.payload
            }
        }
        case APPLY_FILTER:{
            var curentFilter = action.payload.toString().trim().toLowerCase();
            return {
                ...state, 
                currentFilterText: curentFilter,
                activeFilterProducts: curentFilter === "*" ? state.productList : state.productList.filter((item, index)=> {
                    return item.categoryCode.toString().toLowerCase() === curentFilter
                })
            }
        }
        default:
            return state;
    }
}