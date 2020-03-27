import React, { useEffect, useState } from "react";
//import InputText from "../../Components/InputText";
import { ButtonRadius, InputText } from "../../Components";
import "../../scss/ContactForm.scss";
import BlueLines from "../../img/blue-lines.svg";
import { ucfirst } from "Helpers";
const ContactFormComponent = props => {
  const [test, setTest] = useState({
    prvi: "",
    drugi: "",
    trec: ""
  });

  function updateField(e) {
    setTest({
      ...test,
      [e.target.name]: e.target.value
    });
  }

  function onClickFunc() {
    console.log(test);
  }
  return (
    <div className="ContactForm container">
      <div className="row">
        <h1>Kontaktiraj nas</h1>
      </div>
      <div className="row form-description">
        <div className="desc-img col-1 p-0">
          <img src={BlueLines} className="img-fluid" alt="" />
        </div>
        <div className="col-11 p-0">
          <p style={{ width: "80%" }}>
            Ukoliko imaš neko pitanje, sugestiju ili primjedbu za nas, slobodno
            nam se obrati, a mi ćemo u najkraćem roku odgovoriti.
          </p>
        </div>
      </div>
      <div className="row d-flex justify-content-between">
        <div className="col-md-6 col-sm-12 p-0">
          <div className="InputText">
            <div>
              <label className="">{ucfirst("Test test")}</label>
            </div>
            <div style={{ flexGrow: "2" }}>
              <input
                type="text"
                name="prvi"
                value={test.prvi}
                onChange={updateField}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 p-0">
          <div className="InputText">
            <div>
              <label className="">{ucfirst("Test 2")}</label>
            </div>
            <div style={{ flexGrow: "2" }}>
              <input
                type="text"
                name="drugi"
                value={test.drugi}
                onChange={updateField}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-sm-12 p-0">
        <div className="InputText">
          <div>
            <label className="">{ucfirst("Test 3")}</label>
          </div>
          <div style={{ flexGrow: "2" }}>
            <input
              type="text"
              name="trec"
              value={test.trec}
              onChange={updateField}
            />
          </div>
        </div>
      </div>
      <div className="row form-submit">
        <button type="button" className={`ButtonRadius`} onClick={onClickFunc}>
          Posalji
        </button>
      </div>
    </div>
  );
};

export default ContactFormComponent;
