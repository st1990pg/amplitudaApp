import React from "react";
import {ButtonRadius} from "../../Components";
import MainHeading from "../../Components/MainHeading";

const BackgroundHeader = () => {
    return (
        <div className="background-header">
            <div className="header__content">
                <div className="header__title">
                <MainHeading text="Za njihov osmijeh!" classes="white"/>
                </div>
                <p className="paragraph">
                    Postoji jedan zivotni fakultet koji studiraju oni koji imaju volju
                    da izmame sto vise iskrenih osmijeha djeci koja zive bez
                    roditelja. On proizvodi najbolje kadrove iz ove oblasti u nasoj
                    zemlji vec duze od decenije i ne planira da se zaustavi.Upisuje
                    sve kandidate dobre volje,pa nemojte brinuti da li za vas ima
                    mjesta.Ukoliko zelite,samo zakoracite unutra.Lako cete ga
                    pronaci,na njemu je velikim slovima ispisan grafit NJIHOV OSMIJEH VRIJEDI VISE ! Ispitni rok je, za omladinu iz
                    svih gradova Crne Gore,svake godine u aprilu!
                </p>
              <h3 className="subheading">Mi smo spremni,a vi ?</h3>
              <div className="cta-button">
                <ButtonRadius classes="transparent" text="donate"/>
              </div>
            </div>
        </div>

    );
};

export default BackgroundHeader;
