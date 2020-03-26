import React, { useState, useEffect } from "react";
import MainHeading from "../MainHeading";
import Cancel from "../../img/cancel.svg";
import DropdownField from "../DropdownField";
import { ButtonRadius } from "../index";
import Girl from "../../img/Girl.png";
import Boy from "../../img/Boy.png";
import { donirajPopup } from "../../../moc/doniraj";
import { connect } from "react-redux";
import { fetchDonirajPopup } from "Actions/donationAction";

const DonationComponent = props => {
console.log(props);
  const [donirajPopup, setdonirajPopup, close] = useState([]);

  useEffect(() => {
    props.fetchDonirajPopup();
  }, []);


  return (
    <div className="reservation-overview">
      <div className="reservation-overview__heading">
        <MainHeading text="Donacija:" style={{ flex: 1 }} />
        <MainHeading text="Trenerka" classes="accent-color" />
        <img src={Cancel} alt="cancel_button" onClick={close} />
      </div>
      <div className="reservation-overview__paragraf">
        <p>Popuni formu ispod i rezerviši donaciju.</p>
        <div className="row justify-content-center">
          <div className="col-6">
            <hr />
          </div>
        </div>
        <p>Odaberi pol:</p>
      </div>
      <div className="reservation-overview_btn">
        <div className="wrapp">
          <div className="left odabirPola">
            <input type="radio" name="girlIcon" className="girlIcon" />
            <img src={Girl} className="sss" />
            <p> Ženski </p>
          </div>
          <div className="right odabirPola">
            <input type="radio" name="boyIcon" className="boyIcon" />
            <img src={Boy} />
            <p> Muški </p>
          </div>
        </div>
      </div>
      <div className="reservation-overview__content">
        <div className="content-subsection">
         {/*  <DropdownField key="1" title="Uzrast" fields={donationData} />
          <DropdownField key="2" title="Broj" fields={donationData} />
          <DropdownField key="3" title="Količina" fields={donationData} />
          <DropdownField key="4" title="Cijenovni raspon" fields={donationData}
          /> */}
            {props.donirajPopup.map(doniranje => {
            return (
              <DropdownField
                key={doniranje.id}
                title={doniranje.title}
                fields={doniranje.items}
              />
            );
          })}
        </div>
      </div>
      <div className="reservation-overview__footer">
        <div className="footer__submit">
          <ButtonRadius text="Sledeći korak" />
        </div>
        <div className="footer__progress">
          <p>1 od 7</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  donirajPopup: state.donirajPopup.items
});

export default connect (mapStateToProps, { fetchDonirajPopup })(DonationComponent);
