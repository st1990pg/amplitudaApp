import React, { useState, useEffect } from "react";
import Logo from "../Logo";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Form
} from "reactstrap";

import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { fetchNavTranslate } from "../../Actions/navTranlateAction";
import translate from "../../i18n/translate";

const Navigation = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [navTranslate, setNavTranslate] = useState([]);

  useEffect(() => {
    props.fetchNavTranslate();
  }, []);

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
              <NavLink active href="/"><FormattedMessage id="Home" defaultMessage="Pocetna" /></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/doniraj"><FormattedMessage id="Donation" defaultMessage="Doniraj" /></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/vijesti"><FormattedMessage id="News" defaultMessage="Vijesti" /></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blog"><FormattedMessage id="Blog" defaultMessage="Blog" /></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/galerija"><FormattedMessage id="Gallery" defaultMessage="Galerija" /></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/prijatelji"><FormattedMessage id="Friends" defaultMessage="Prijatelji" /></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/onama"><FormattedMessage id="AboutUs" defaultMessage="O nama" /></NavLink>
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

const mapStateToProps = state => ({
  navTranslate: state.navTranslate
});



export default connect (mapStateToProps, { fetchNavTranslate })(Navigation);
