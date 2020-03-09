import React from "react";
import ButtonRadius from "../Components/ButtonRadius";

const BackgroundHeader = () => {
  return (
    <div className="container-fluid main">
      <div className="container naslov">
        <div className="row">
          <div className="col-6">
            <h1 className="display-4">
              <strong>Za njihov osmijeh!</strong>
            </h1>
            <p className="paragraf">
              Postoji jedan zivotni fakultet koji studiraju oni koji imaju volju
              da izmame sto vise iskrenih osmijeha djeci koja zive bez
              roditelja. On proizvodi najbolje kadrove iz ove oblasti u nasoj
              zemlji vec duze od decenije i ne planira da se zaustavi.Upisuje
              sve kandidate dobre volje,pa nemojte brinuti da li za vas ima
              mjesta.Ukoliko zelite,samo zakoracite unutra.Lako cete ga
              pronaci,na njemu je velikim slovima ispisan grafit{" "}
              <b>NJIHOV OSMIJEH VRIJEDI VISE</b>!Ispitni rok je, za omladinu iz
              svih gradova Crne Gore,svake godine u aprilu!
            </p>
            <h3>Mi smo spremni,a vi ?</h3>
          </div>
          <div className="col-6"></div>
        </div>
        <div className="row">
          <div className="col-3">
            <ButtonRadius className="transparent" text="Doniraj" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundHeader;
