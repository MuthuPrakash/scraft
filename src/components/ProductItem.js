import React,{Component} from 'react';



export default class ProductItem extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            imageUrl: require("../content/images/ProductLogo/"+ this.props.product.imageLogo +".jpeg")
        }
    }

    render(){
        return(
            
            <div className='productItem' style={{height:'400px', minWidth: '300px',display:"flex", flexDirection:"column", flex: 1, flexBasis:'calc(33% - 40px)',flexGrow:0, borderWidth:"5px", padding:"15px", margin:"5px", borderColor:"orange"}}>
                <div  style={{flex:1,backgroundSize: 'contain',backgroundPosition:"left", backgroundRepeat:"no-repeat", marginBottom:'10px', borderWidth:'2px', borderColor:"blue", backgroundImage: `url(${this.state.imageUrl})`}}>
                </div>
                <div style={{height:"60px",paddingTop:'5px', display:"flex", flexDirection:"column"}}>
                    <span style={{flex:1}}>{this.props.product.displayName}</span>
                    <span style={{flex:1}}>{this.props.product.cost != null ? this.props.product.cost.price + " " + this.props.product.cost.code : "0.00 INR"}</span>
                </div>
            </div>

        )
    }
}