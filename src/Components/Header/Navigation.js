import React, { useState } from "react";
import Logo from "../Logo";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import translate from "../../i18n/translate";

const Navigation = (text) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [items] = React.useState([
    { label: "Srpski", value: "Srpski" },
    { label: "Engleski", value: "Englski" },
    { label: "Francuski", value: "Francuski" }
  ]);

  return (
    <div>
      <Navbar expand="md">
        <Logo />

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink active href="/">{translate(text)}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/doniraj">Doniraj</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/vijesti">Vijesti</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blog">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/galerija">Galerija</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/prijatelji">Prijatelji</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/onama">O nama</NavLink>
            </NavItem>
          </Nav>
        </Collapse>

        <select className="langDropdown">
          {items.map(item => (
            <option key={item.value}>{item.label}</option>
          ))}
        </select>

      </Navbar>
    </div>
  );
};

export default Navigation;
