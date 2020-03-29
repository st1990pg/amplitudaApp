import React from "react";
import { ButtonRadius } from "../../Components";
import useToggle from "../../hooks/useToggle";
import ReservationOverview from "../../Components/Modals/ReservationOverview";
import { Donation, PersonalInfo } from "../../Components";
import ModalWrapper from "../../Components/Modals/ModalWrapper";
import DonationPopUp from "../../Components/Modals/DonationPopUp";
import { connect } from "react-redux";
import { deleteSlider } from "Actions/sliderAction";

const ModalTriggers = props => {
  //otvara/zatvara modale
  const [modalOne, toggleModalOne] = useToggle(false);
  const [modalTwo, toggleModalTwo] = useToggle(false);

  const [modalThree, toggleModalThree] = useToggle(false);
  const [modalFour, toggleModalFour] = useToggle(false);
  const [modalFive, toggleModalFive] = useToggle(false);
  const [modalSix, toggleModalSix] = useToggle(false);
  const [modalSeven, toggleModalSeven] = useToggle(false);
  function delteSLider() {
    props.deleteSlider(2);
  }

  return (
    <div className="modal-triggers mt-5">
      {/*Saljemo funkciju otvaranja modala dugmadima
        Promijenio nazive dugmadima jer bi intl package
        davao 7 gresaka za nepreveden tekst 1 of 7, 2 of 7...
      */}
      <ButtonRadius text="modal" onclick={toggleModalOne} />
      <ButtonRadius text="modal" onclick={delteSLider} />
      <ButtonRadius text="modal" onclick={toggleModalThree} />
      <ButtonRadius text="modal" onclick={toggleModalFour} />
      <ButtonRadius text="modal" onclick={toggleModalFive} />
      <ButtonRadius text="modal" onclick={toggleModalSix} />
      <ButtonRadius text="modal" onclick={toggleModalSeven} />

      {/*Da dodate novi modal samo ga ubacite u novi ModalWrapper*/}
      <ModalWrapper show={modalSeven}>
        {/*Proslijedjuje modalu mogucnost da sam sebe zatvori (npr na 'X' dugmetu) */}
        <ReservationOverview close={toggleModalSeven} />
      </ModalWrapper>

      <ModalWrapper show={modalOne}>
        {/*Proslijedjuje modalu mogucnost da sam sebe zatvori (npr na 'X' dugmetu) */}
        <Donation close={toggleModalOne} />
      </ModalWrapper>

      <ModalWrapper show={modalSix}>
        <PersonalInfo close={toggleModalSix} />
      </ModalWrapper>

      <ModalWrapper show={modalFour}>
        <DonationPopUp close={toggleModalFour} />
      </ModalWrapper>
    </div>
  );
};

const mapStateToProps = state => ({
  slider: state.slider.items
});

export default connect(mapStateToProps, { deleteSlider })(ModalTriggers);
