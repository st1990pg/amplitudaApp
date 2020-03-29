import React from "react";
import { ButtonRadius } from "../../Components";
import MainHeading from "../../Components/MainHeading";
import translate from "../../i18n/translate";

const BackgroundHeader = () => {
  const text2 = "headerText";
  const text3 = "headerTextH";
  

  return (
    <div className="background-header">
      <div className="header__content">
        <div className="header__title">
          <MainHeading text="za njih" classes="white" />
        </div>
        <p className="paragraph">
        {translate(text2)}
        </p>
        <h3 className="subheading">{translate(text3)}</h3>
        <div className="cta-button">
          <ButtonRadius classes="transparent" text="donate" />
        </div>
      </div>
    </div>
  );
};

export default BackgroundHeader;
