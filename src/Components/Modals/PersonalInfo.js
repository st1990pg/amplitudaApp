import React, { useState } from "react";
import MainHeading from "../MainHeading";
import Cancel from "../../img/cancel.svg";
import InputText from "../InputTextComponent";
import ButtonRadius from "../ButtonRadiusComponent";
import useField from "../../hooks/useField";
import axios from "axios";
/* import { ButtonRadius, InputText } from "../index"; */

const PersonalInfoComponent = ({ close }) => {
  const [name, setName] = useField();
  const [email, setEmail] = useField();
  const [phoneNumber, setPhoneNumber] = useField();
  const [lice, setLice] = useState("");

  const submitValue = () => {
    const Person = {
      name: name,
      email: email,
      phone: phoneNumber,
      lice: lice
    };
    axios.post("/informacije", { Person }).then(res => {
      console.log(res);
      console.log(res.data);
    });

    close();
  };

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
            <input
              type="radio"
              name="colour"
              value="pravno"
              id="colour-blue"
              onClick={() => setLice("Pravno")}
            />
            <label htmlFor="colour-blue">
              <span>Pravno Lice</span>
            </label>
          </div>
          <div className="right">
            <input
              type="radio"
              name="colour"
              value="gray"
              id="colour-gray"
              onClick={() => setLice("Fizicko")}
            />
            <label htmlFor="colour-gray">
              <span>Fizicko Lice</span>
            </label>
          </div>
        </div>
      </div>
      <div className="reservation-overview__content">
        <div className="content-subsection">
          <InputText
            label="ime i prezime donatora"
            value={name}
            onchange={setName}
          />
          <InputText label="Email" value={email} onchange={setEmail} />
          <InputText
            label="Broj telefona"
            value={phoneNumber}
            onchange={setPhoneNumber}
          />
        </div>
      </div>
      <div className="reservation-overview__footer">
        <div className="footer__submit">
          <ButtonRadius onclick={submitValue} text="nextStep" />
        </div>
        <div className="footer__progress">
          <p>6 od 7</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoComponent;