import React from "react";
/*import '../../scss/Footer.scss';*/
import girl from "../../img/Djevojcica.png";
import boy from "../../img/Djecak.png";
import Icons from "./icons";
import Logo from "../Logo";

const Footer = props => {
  return (
    <div>
      <footer>
        <img src={girl} alt="djevojcica" className="girl" />
        <img src={boy} alt="djecak" className="boy" />
        <div className="mainFooter">
          <div className="container-fluid">
            <div className="row justify-content-center logo">
              <Logo />
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-6 col-lg-4">
                NVO „Nacionalni osmijeh“ <br />
                <a target="_blank" href="#" title="mail" className="mail">
                  njihov.osmijeh@gmail.com
                </a>
                <div className="row justify-content-center">
                  <div className="col-xs-8 col-lg-6">
                    <hr />
                  </div>
                </div>
                <div className="mobile">
                  <p>067 330 137</p>
                  <Icons />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
