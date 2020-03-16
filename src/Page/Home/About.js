import React from 'react';
import Image from '../../img/photo.jpg';
import Wave from '../../img/Path15.svg';
import ButtonArrow from '../../Components/ButtonArrow';


const About = props => {


    return (
          <div className="about-container">
            <div className="text">
                <div className="text-container">

                <h2 className="header">Ko smo mi?</h2>

                <div className="paragraph">
                    <img className="wave-img" src={Wave} alt="photo"/>
                    <div>
                        <p> {props.text1}</p>
                        <p> {props.text2}</p>
                    </div>
                </div>
                <div className="button-container">
                <ButtonArrow fontSize="2.4rem" link="#" text="Saznaj više"/>

                </div>
                </div>
            </div>
            <div className="images">
                <div className="circle"></div>
                <img src={Image} alt="photo"/>
import React from "react";
import Image from "../../../img/photo.jpg";
import Wave from "../../../img/Path15.svg";
import ButtonArrow from "../../../Components/ButtonArrow";

import "./About.css";

const About = props => {
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

export default About;
