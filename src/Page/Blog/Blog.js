import React from "react";
import "../../scss/Blog.scss";
import ButtonRadius from "../../Components/ButtonRadiusComponent";
import Slika from "../../img/Happy-Children.png";
import Autor from "../../img/autor.png";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="blog-wrapper-div">
        <div className="blog-post-div">
          <img className="autor-img" src={Slika} alt="slika" />
          <div  className="blog-text-div">
            <div className="autor-div">
              <img src={Autor} alt="autor" />
              <div>
                <h4 className="autor-name">Petar Petrović</h4>
                <p className="autor-date">12.02.2019</p>
              </div>
            </div>
            <h2 className="blog-heading">Naslov bloga u dva reda, naslov bloga</h2>
            <p className="blog-p">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna...
            </p>
            <ButtonRadius classes="button-radius" text="Pročitaj"></ButtonRadius>
          </div>
        </div>
        <div className="blog-post-div">
          <img className="autor-img" src={Slika} alt="slika" />
          <div  className="blog-text-div">
            <div className="autor-div">
              <img src={Autor} alt="autor" />
              <div>
                <h4 className="autor-name">Petar Petrović</h4>
                <p className="autor-date">12.02.2019</p>
              </div>
            </div>
            <h2 className="blog-heading">Naslov bloga u dva reda, naslov bloga</h2>
            <p className="blog-p">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna...
            </p>
            <ButtonRadius classes="button-radius" text="Pročitaj"></ButtonRadius>
          </div>
        </div>
        <div className="blog-post-div">
          <img className="autor-img" src={Slika} alt="slika" />
          <div  className="blog-text-div">
            <div className="autor-div">
              <img src={Autor} alt="autor" />
              <div>
                <h4 className="autor-name">Petar Petrović</h4>
                <p className="autor-date">12.02.2019</p>
              </div>
            </div>
            <h2 className="blog-heading">Naslov bloga u dva reda, naslov bloga</h2>
            <p className="blog-p">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna...
            </p>
            <ButtonRadius classes="button-radius" text="Pročitaj"></ButtonRadius>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
