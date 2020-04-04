import React, { useState, useEffect } from "react";
import Image from "../../img/photo.jpg";
import Wave from "../../img/Path15.svg";
import ButtonArrow from "Components/ButtonArrow";
import { fetchAbout } from "Actions/aboutAction";
import { connect } from "react-redux";
import translate from "../../i18n/translate";

const About = props => {
  const [about, aboutSet] = useState([]);
  useEffect(() => {
    props.fetchAbout();
  }, []);
  const text1= "text1";
  const text2="text2";
  const title="title";
  return (
    <div className="about-container ContactUs">
      <div className="text">
        <div className="text-container">
  <h2 className="header">{translate(title)}</h2>

          <div className="paragraph">
            <img className="wave-img" src={Wave} alt="photo" />
            <div>
              <p> {translate(text1)}</p>
              <p> {translate(text2)}</p>
            </div>
          </div>
          <div className="button-container">
            <ButtonArrow fontSize="2.4rem" link="#" text="find out more" />
          </div>
        </div>
      </div>
      <div className="images">
        <div className="circle"></div>
        <img src={Image} alt="photo" />
      </div>
    </div>

  );
};

const mapStateToProps = state => ({
  about: state.aboutUs.items
});

export default connect(mapStateToProps, { fetchAbout })(About);
