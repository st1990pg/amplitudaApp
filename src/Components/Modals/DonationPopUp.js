import React from 'react';

// import MainHeading from "../MainHeading";
import Image from '../../img/zahvalnica.jpg';
import Image1 from '../../img/cancel.svg';


const DonationPopUp = props => {

return (
          <div className="donation-popup">
            <h2 className="header" >Uspješna rezervacija!</h2>
            <div className="image" >
                <img src={Image} alt="Photo"/>
                
        </div>
      <div className="image1">
        <img src={Image1} onClick={()=> props.close()} alt="PhotoX" />
        
        </div>
          </div>
      
    )
}

export default DonationPopUp;