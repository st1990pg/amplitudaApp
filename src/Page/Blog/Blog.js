import React from "react";
import ButtonRadiusComponent from "Components/ButtonRadiusComponent";

const Blog = ({propsBlog}) => {

  return (
    <div className="wrapper">
        <div className="container wrapp">
          <div className="row">
            <div className="col-6">
              <img src={propsBlog.imgBlog} alt="SLICICA1" />
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-2">
                  <img src={propsBlog.imgBlog} alt="PROFILE" className="ikonica" />
                </div>
                <div className="col-10">
                  <span className="username"> {propsBlog.autor.name} </span>
                  <p className="date">{propsBlog.autor.create}</p>
                </div>
              </div>

              <h1 className="naslov1"> {propsBlog.title}</h1>
              <br />
              <p className="tekst1">
                 {propsBlog.text}
              </p>
              <br />
              <div className="col-6">
                 <ButtonRadiusComponent classes="transparent blue" text="read" />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid decoration"></div>
    </div>
  );
};

export default Blog;