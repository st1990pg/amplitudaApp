import React from 'react';
import ButtonRadius from "../../Components/ButtonRadius";
import useToggle from "../../hooks/useToggle";
import ReservationOverview from "../../Components/Modals/ReservationOverview";
import PersonalInfo from "../../Components/Modals/PersonalInfo"
import ModalWrapper from "../../Components/Modals/ModalWrapper";

const ModalTriggers = () => {

    //otvara/zatvara modale
    const [modalOne, toggleModalOne] = useToggle(false);
    const [modalTwo, toggleModalTwo] = useToggle(false);
    const [modalThree, toggleModalThree] = useToggle(false);
    const [modalFour, toggleModalFour] = useToggle(false);
    const [modalFive, toggleModalFive] = useToggle(false);
    const [modalSix, toggleModalSix] = useToggle(false);
    const [modalSeven, toggleModalSeven] = useToggle(false);

    return (
        <div className="modal-triggers">
            {/*Saljemo funkciju otvaranja modala dugmadima*/}
            <ButtonRadius text="1 of 7" onclick={toggleModalOne}/>
            <ButtonRadius text="2 of 7" onclick={toggleModalTwo}/>
            <ButtonRadius text="3 of 7" onclick={toggleModalThree}/>
            <ButtonRadius text="4 of 7" onclick={toggleModalFour}/>
            <ButtonRadius text="5 of 7" onclick={toggleModalFive}/>
            <ButtonRadius text="6 of 7" onclick={toggleModalSix}/>
            <ButtonRadius text="7 of 7" onclick={toggleModalSeven}/>

            {/*Da dodate novi modal samo ga ubacite u novi ModalWrapper*/}
            <ModalWrapper show={modalSeven}>
                {/*Proslijedjuje modalu mogucnost da sam sebe zatvori (npr na 'X' dugmetu) */}
                <ReservationOverview close={toggleModalSeven}/>
            </ModalWrapper>

        
            
            <ModalWrapper show={modalSix}>
                <PersonalInfo close={toggleModalSix}/>
            </ModalWrapper>
           
        </div>
    );
};

export default ModalTriggers;