import React, { useState } from "react";
import { ButtonRadius } from "../../Components";
import translate from "../../i18n/translate";
import { Button } from "reactstrap";

const BackgroundHeader = () => {
  const [locale, setLocale] = useState("sr");

  const text1 = ` Postoji jedan zivotni fakultet koji studiraju oni koji imaju volju
da izmame sto vise iskrenih osmijeha djeci koja zive bez
roditelja. On proizvodi najbolje kadrove iz ove oblasti u nasoj
zemlji vec duze od decenije i ne planira da se zaustavi. Upisuje
sve kandidate dobre volje,pa nemojte brinuti da li za vas ima
mjesta. Ukoliko zelite,samo zakoracite unutra. Lako cete ga
pronaci,na njemu je velikim slovima ispisan grafit`;

  const boldText = "NJIHOV OSMIJEH VRIJEDI VISE!";
  const text2 =
    "Ispitni rok je, za omladinu iz svih gradova Crne Gore,svake godine u aprilu!";
  const text3 = "Mi smo spremni,a vi ?";

  return (
    <div className="container-fluid main">
      <div className="container naslov">
        <div className="row">
          <div className="col-6">
            <h1 className="display-4">
              <strong>Za njihov osmijeh!</strong>
            </h1>
            <p className="paragraf">
              {translate(text1)} <b>{translate(boldText)}</b> {translate(text2)}
            </p>
            <h3>{translate(text3)}</h3>
            <div className="row">
              <div className="col-4 mb-4">
                <Button
                  color="info"
                  onClick={() => setLocale(" LOCALES.FRENCH ")}
                >
                  Francuski
                </Button>
              </div>
              <div className="col-4 mb-4">
                <Button
                  color="info"
                  onClick={() => setLocale(" LOCALES.ENGLISH ")}
                >
                  Engleski
                </Button>
              </div>
              <div className="col-4 mb-4">
                <Button
                  color="info"
                  onClick={() => setLocale(" LOCALES.SERBIAN ")}
                >
                  Srpski
                </Button>
              </div>
            </div>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundHeader;
