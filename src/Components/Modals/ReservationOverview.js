import React, { useState, useEffect } from "react";
import MainHeading from "../MainHeading";
import ButtonArrow from "../ButtonArrow";
import Cancel from "../../img/cancel.svg";
import DropdownField from "../DropdownField";
import { ButtonRadius, InputText } from "../index";
import { donationSelection } from "../../../moc/doniraj";
import { connect } from "react-redux";
import { fetchSlider } from "Actions/sliderAction";

const ReservationOverview = (props, { close }) => {
  const exampleUserData = {
    name: "Stefan Nikocevic",
    email: "nikocevicstefan@gmail.com",
    phone: "069602930"
  };

  useEffect(() => {
    props.fetchSlider();
  }, []);

  const exampleDonationData = {
    pol: "Zenski",
    uzrast: "10-12 godina",
    broj: 33,
    kolicina: 2,
    cjenovni_raspon: "20-40"
  };

  const [userData, setUserData] = useState(exampleUserData);
  const [donationData, setDonationData] = useState(exampleDonationData);

  return (
    <div className="reservation-overview">
      <div className="reservation-overview__heading">
        <p>Prethodni Korak</p>
        <MainHeading text="Pregled rezervacije" style={{ flex: 1 }} />
        <img src={Cancel} alt="cancel_button" onClick={close} />
      </div>
      <div className="reservation-overview__content">
        <div className="content-subsection">
          <h4 className="content-subsection__heading">
            Informacije o donatoru:
          </h4>
          <InputText
            label="ime i prezime donatora"
            value={userData.name}
            disabled={true}
          />
          <InputText label="Email" value={userData.email} disabled={true} />
          <InputText
            label="Broj telefona"
            value={userData.phone}
            disabled={true}
          />
        </div>
        <div className="content-subsection">
          <h4 className="content-subsection__heading">
            Informacije o artiklima:
          </h4>
          {donationSelection.map(selection => {
            return (
              <DropdownField
                key={selection.id}
                title={selection.title}
                fields={selection.description}
              />
            );
          })}
        </div>
      </div>
      <div className="reservation-overview__footer">
        <div className="footer__message">
          <p>* Donacija može biti rezervisana 5 dana od datuma rezervisanja,</p>
          <p> nakon čega prelazi u kategoriju slobodnih proizvoda.</p>
        </div>
        <div className="footer__submit">
          <ButtonRadius text="Rezervisi donaciju" />
        </div>
        <div className="footer__progress">
          <p>7 od 7</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  slider: state.slider.items
});

export default connect(mapStateToProps, { fetchSlider })(ReservationOverview);
