import React, { useState, useEffect } from "react";
import Image from "../../img/photo.jpg";
import Wave from "../../img/Path15.svg";
import ButtonArrow from "Components/ButtonArrow";
import { fetchAbout } from "Actions/aboutAction";
import { connect } from "react-redux";


const About = props => {
  const [about, aboutSet] = useState([]);
  useEffect(() => {
    props.fetchAbout();
  }, []);
  return (
    <div className="about-container ContactUs">
      <div className="text">
        <div className="text-container">
          <h2 className="header">Ko smo mi?</h2>

          <div className="paragraph">
            <img className="wave-img" src={Wave} alt="photo" />
            <div>
              <p> {props.text1}</p>
              <p> {props.text2}</p>
            </div>
          </div>
          <div className="button-container">
            <ButtonArrow fontSize="2.4rem" link="#" text="Saznaj više" />
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
