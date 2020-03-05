import React from 'react';
import '../../scss/footer.scss';
import Djevojcica from "../../img/Djevojcica.png";
import Djecak from "../../img/Djecak.png";

function Footer() {
  return (
    <div>
      <img src={Djevojcica}  alt="djevojcica" className="djevojcica" /> 
      <img src={Djecak} alt="djecak" className="djecak" />
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
                      <hr/>
                   <div className="mobile">
                    <p>067 330 137</p>
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
