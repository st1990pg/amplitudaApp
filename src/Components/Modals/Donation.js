import React, { useState } from "react";
import MainHeading from "../MainHeading";
import Cancel from "../../img/cancel.svg";
import DropdownField from "../DropdownField";
import ButtonRadius from "../ButtonRadius";
import Girl from "../../img/Girl.png";
import Boy from "../../img/Boy.png";

const DonationComponent = ({ close }) => {
  const exampleDonationData = {
    uzrast: [1, 2, 3, 4, 5, 6]
  };

  // const [userData, setUserData] = useState(exampleUserData);
  const [donationData, setDonationData] = useState(exampleDonationData);

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
          <div className="left">
            <button onClick="btnColorChange()" className="odabirPola">
              <p>
                <img src={Girl} className="ikonice" />
                Ženski
              </p>
            </button>
          </div>
          <div className="right">
            <button onClick="btnColorChange()" className="odabirPola">
              <p>
                <img src={Boy} className="ikonice" />
                Muški
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="reservation-overview__content">
        <div className="content-subsection">
          <DropdownField key="1" title="Uzrast" fields={donationData} />
          <DropdownField key="2" title="Broj" fields={donationData} />
          <DropdownField key="3" title="Količina" fields={donationData} />
          <DropdownField
            key="4"
            title="Cijenovni raspon"
            fields={donationData}
          />
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

export default DonationComponent;
