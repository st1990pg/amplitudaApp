import React, { Component } from 'react';
import Navigation from './Navigation';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
    render() { 
        return (
            <div className='nav-wrapper'>
                <Navigation/> 
                {this.props.children}
            </div>
        );
    }
}
 
export default Layout;