import React from "react";
import { render } from "react-dom";
import { useCountUp } from 'react-countup';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Rectangle = props => {
    const { countUp } = useCountUp({ end: 296 });
    const percentage=73;
    return(
 <div className="rectangle-container">

    <div className="count">
      {countUp}
    </div> 
    <div className="line"> <span></span></div>

     <div className="txt1">
       <p>
        {props.txt1}</p>
   </div>
    
    
  <div className="circular">
      <CircularProgressbar value={percentage} text={`${percentage}`} />
  </div> 
        
  <div className="txt2">
     <p> {props.txt2}</p>
  </div>
   
 </div>
 
    )
}

export default Rectangle;