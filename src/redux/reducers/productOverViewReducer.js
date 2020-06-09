import {SELECT_PRODUCT_ITEM, SWITCH_PRODUCT_BG_IMAGE} from '../actions/types';

const initialState = {
    selectedItem:null,
    imageURL: null,
    currImage: null
};

export default function(state= initialState, action)
{
    switch(action.type){
        case SELECT_PRODUCT_ITEM:{
            const productsImage =  require('../../content/images/ProductLogo/' + action.payload.imageLogo);
            return {
                ...state, 
                selectedItem: action.payload,
                imageURL: action.payload.imageLogo,
                currImage: productsImage
            }
        }
         case SWITCH_PRODUCT_BG_IMAGE:{
            const productsImage =  require('../../content/images/ProductLogo/' + action.payload);
            return {
                ...state,
                imageURL: action.payload,
                currImage: productsImage
            }
        }
       
        default:
            return state;
    }
}
// import { SELECT_PRODUCT_ITEM, SWITCH_PRODUCT_BG_IMAGE } from '../actions/types';

// const initialState ={
//     // aaa:"sss",
//     // selectedItem: null,
//     // currentImageURL:null
// };


// export default function(state= initialState, action)
// {
//     console.log(action.payload)
//     switch(action.type){
//         case SELECT_PRODUCT_ITEM:{
//             return {
//                 aaa:"adfsdff",
//                 selectedItem: "sdasdad"
//                 //,
//                 //currentImageURL: action.payload.imageLogo
//             }
//         }
//         case SWITCH_PRODUCT_BG_IMAGE:{
//             return {
//                 ...state,
//                 currentImageURL: action.payload
//             }
//         }
//         default:
//             return state;
//     }
    

// }