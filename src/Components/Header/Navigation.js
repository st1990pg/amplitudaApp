import React, { useState } from 'react';
import Logo from '../Logo';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Navigation = (props) => {
    
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md">
        <NavbarBrand href="/">
        <Logo/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink active href="/">Početna </NavLink>
            </NavItem>
            <NavItem>
              <NavLink  href="/doniraj">Doniraj</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  href="/vijesti">Vijesti</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  href="/blog">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  href="/galerija">Galerija</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  href="/prijatelji">Prijatelji</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  href="/onama">O nama</NavLink>
            </NavItem>  
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;