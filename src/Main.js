import React, {Component} from 'react';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Products from './pages/Products';
import {NavLink, Route, HashRouter} from 'react-router-dom';

export default class Main extends Component{
    constructor(props)
    {
        super(props);
    }
    

    render(){
        return(
            <HashRouter>
                <div>
                    <h1>Scraft</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/products">Products</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/products" component={Products}/>
                        <Route path="/contact" component={ContactUs}/>
                    </div>
                    </div>
            </HashRouter>
        );
    }
}
