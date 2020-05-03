import React, {Component} from 'react';
import ProductList from '../components/ProductItem';

export default class Products extends Component{
    constructor(props)
    {
        super(props);

        this.state={
            productList: require('../data/productsList.json')
        }
    }

    prepareProducts = () => {
       var productList =  this.state.productList.products.map((item,index) =>{
           return <ProductList product={item} key={index}/>
        })

        return productList;
    }

    render(){
        return(
            <div style={{width:'100%', height:'100%', backgroundColor:"#f1f3f6", display:'flex', flexDirection:"row", flexWrap:"wrap"}}>
               {
                   this.prepareProducts()
               }
            </div>
        )
    }
}