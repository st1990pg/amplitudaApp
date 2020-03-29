import React from 'react';

const SuccessCounters = () => {

    return (
        <div className="success-counters">
            <div className="articles">
                <div className="articles__counter">296</div>
                <div className="articles__line"> <span></span> </div>
                <div className="articles__text">Broj <br/> doniranih <br/> artikala</div>
            </div>
            <div className="smiles">
                <div className="smiles__counter">73</div>
                <div className="smiles__text">Broj <br/> ostvarenih <br/> osmjeha</div>
            </div>
        </div>
    );
};

export default SuccessCounters;