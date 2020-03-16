import React, { useState } from "react";
import MainHeading from "../MainHeading";
import Cancel from "../../img/cancel.svg";
import InputText from "../InputText";
import ButtonRadius from "../ButtonRadius";

const PersonalInfoComponent = ({ close }) => {
  return (
    <div className="reservation-overview">
      <div className="reservation-overview__heading">
        <p>Prethodni Korak</p>
        <MainHeading text="Lične informacije" style={{ flex: 1 }} />
        <img src={Cancel} alt="cancel_button" onClick={close} />
      </div>
      <div className="reservation-overview__paragraf">
        <p>
          Informacije su nam potrebne kako bi uspješno rezervisali rezervaciju
        </p>
        <hr />
        <p> Odaberi: </p>
      </div>
      <div className="reservation-overview_btn">
        <div className="wrapp">
          <div className="left">
            <input type="radio" name="colour" value="blue" id="colour-blue" />
            <label htmlFor="colour-blue">
              <span>Pravno Lice</span>
            </label>
          </div>
          <div className="right">
            <input type="radio" name="colour" value="gray" id="colour-gray" />
            <label htmlFor="colour-gray">
              <span>Fizicko Lice</span>
            </label>
          </div>
        </div>
      </div>
      <div className="reservation-overview__content">
        <div className="content-subsection">
          <InputText label="ime i prezime donatora" />
          <InputText label="Email" />
          <InputText label="Broj telefona" />
        </div>
      </div>
      <div className="reservation-overview__footer">
        <div className="footer__submit">
          <ButtonRadius text="Sledeći korak" />
        </div>
        <div className="footer__progress">
          <p>6 od 7</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoComponent;
