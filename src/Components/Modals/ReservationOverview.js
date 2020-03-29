import React, { useState, useEffect } from "react";
import MainHeading from "../MainHeading";
import ButtonArrow from "../ButtonArrow";
import Cancel from "../../img/cancel.svg";
import DropdownField from "../DropdownField";
import { ButtonRadius, InputText } from "../index";
import { connect } from "react-redux";
import {fetchUser, fetchItems} from "Actions/donirajAction";

const ReservationOverview = (props) => {
  const {user, items, close} = props;
  useEffect(() => {
    props.fetchItems();
    props.fetchUser();
  }, []);

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
            value={user.name}
            disabled={true}
          />
          <InputText label="Email" value={user.email} disabled={true} />
          <InputText
            label="Broj telefona"
            value={user.phone}
            disabled={true}
          />
        </div>
        <div className="content-subsection">
          <h4 className="content-subsection__heading">
            Informacije o artiklima:
          </h4>
          {items.map(selection => {
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
          <ButtonRadius text="reserve a donation" />
        </div>
        <div className="footer__progress">
          <p>7 od 7</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  items: state.doniraj.items,
  user: state.doniraj.user
});

export default connect(mapStateToProps, { fetchUser, fetchItems })(ReservationOverview);
