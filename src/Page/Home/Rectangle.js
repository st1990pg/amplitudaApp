import React from "react";
import { render } from "react-dom";
import { useCountUp } from 'react-countup';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import translate from "../../i18n/translate";
const Rectangle = props => {
    const { countUp } = useCountUp({ end: 296 });
    const percentage=73;
    const txt1="txt1";
    const txt2= "txt2";
    return(
 <div className="rectangle-container">

    <div className="count">
      {countUp}
    </div> 
    <div className="line"> <span></span></div>

     <div className="txt1">
       <p>
        {translate(txt1)}</p>
   </div>
    
    
  <div className="circular">
      <CircularProgressbar value={percentage} text={`${percentage}`} />
  </div> 
        
  <div className="txt2">
     <p> {translate(txt2)}</p>
  </div>
   
 </div>
 
    )
}

export default Rectangle;