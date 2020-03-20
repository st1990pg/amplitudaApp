import React from "react";
import Medo from "../../img/medo.png";
import "../../scss/Donate.scss";
import { doniraj } from '../../../moc/doniraj';
import { Tabs } from '../../Components'
import { Tab } from "@material-ui/core";

class Donate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="donate-header-wrapper">
          <div className="donate-header">
            <h2 className="donate-heading">
              Doniraj osmijeh, <br />
              jer imaš priliku!
            </h2>
            <p className="donate-p">
              Pred tobom je prikazan spisak artikala koje je potrebno nabaviti
              za mališane iz Dječijeg doma “Mladost” u Bijeloj. Sve
              zainteresovane ustanove i građani kao potencijalni donatori mogu
              da odaberu, rezervišu i dostave nam određene proizvode koje će
              naši dobrovoljni aktivisti brižljivo sortirati i pakovati, kako bi
              se u sklopu jednoobraznih paketa predali štićenicima Doma u okviru
              manifestacije <b>"DAN BEZ TELEFONA I DRUŠTVENIH MREŽA"</b> koji je
              planiran za 29. april 2017.
            </p>
          </div>

          <div className="img-div">
            <img src={Medo} alt="Medo" />
          </div>
        </div>
        <div className="middle-header">
          <h2 className="donate-heading middle-heading">Šta želite da donirate?</h2>
          <p className="donate-p">
            Ovdje možeš odabrati kategoriju i pogledati spisak artikala kojima
            ćemo ove<br/> godine obradovati štićenike Doma "Mladost" u Bijeloj.
          </p>
          <p className="donate-p">
            Pogledaj - odaberi - DONIRAJ i izmamite bar jedan iskren i topao
            dječiji osmijeh.
          </p>
        </div>
        <div className="tabs-div">
          <Tabs></Tabs>
          {/* <div>
              <div className="tabs-div">
                <img src="" alt=""/>
                <p>Odjeca i obuca</p>
              </div>
          </div>

          <div>
            
          </div>

          <div>
            
          </div> */}
        </div>
      </div>
    );
  }
}

export default Donate;
