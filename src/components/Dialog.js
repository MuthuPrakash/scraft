import React, {Component} from 'react';
import "../content/styles/model.css"
// import hoistNonReactStatics from 'hoist-non-react-statics';

// const Dialog = WrappedComponent =>{

//     class ModalDialog extends Component{

//         constructor(props){
//             super(props);
//         }

//         render(){
//             return(
//                 <div>
//                   <WrappedComponent/>
//                 </div>
//             )
//         }
//     }

// }

export default class Dialog extends Component{

    constructor(props)
    {
        super(props);
    }

    OnClose = () => {
        if(this.props.OnClose != null && typeof this.props.OnClose == 'function')
        {
            this.props.OnClose()
        }
    }

    render(){
        if (!this.props.show) return null;
          
        return(
            <div class="modal" id="modal">
                { 
                    this.props.Title && <h2>{this.props.Title}</h2>
                }
                 <div class="content">
                    {
                        this.props.children
                    }
                </div>
            </div>
        )
    }
}