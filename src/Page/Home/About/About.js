import React from 'react';
import Image from './photo.jpg';
import Wave from './Path15.svg';

import './About.css';

const About = props =>{


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

                </div>
            </div>
            <div className="images">
                <div className="circle"></div>
                <img src={Image} alt="photo"/>
            </div>
               
          </div>
    )
}

export default About;