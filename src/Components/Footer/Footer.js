import React from 'react';
import '../../scss/footer.scss';
import girl from "../../img/Djevojcica.png";
import boy from "../../img/Djecak.png";
import Icons from "./icons";

const Footer = props =>{
  return (
    <div>
      <img src={girl}  alt="djevojcica" className="girl" /> 
      <img src={boy} alt="djecak" className="boy" />
    <footer>
        <div className="mainFooter">
            <div className="container-fluid">
              <div className="row justify-content-center">
                 <div className="logo"></div>
              </div>
                <div className="row justify-content-center">
                  <div className="col-4">
                    NVO „Nacionalni osmijeh“ <br/>
                    <a target="_blank" href="#" title="mail" className="mail">
                      njihov.osmijeh@gmail.com</a>
                    <div className="row justify-content-center">
                        <div className="col-6">
                          <hr />
                        </div>
                    </div> 
                   <div className="mobile">
                    <p>067 330 137</p>
                    <Icons/>
                    </div>
                  </div>
                </div>
            </div> 
        </div>  
      </footer>
    </div>
  );
}

export default Footer;
