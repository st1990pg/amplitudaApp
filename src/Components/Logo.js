import React, { Component } from 'react';
import  logo from '../img/logo2.png';
import {Link} from 'react-router-dom';
/* import {NavLink} from 'reactstrap'; */

const Logo = (props) => {
    return ( 
        <div>
            {/* <NavLink href="/"><img src={logo}/></NavLink> */}
            <Link to="/"><img src={logo}/></Link>
        </div>
     );
}
 
export default Logo;
