import React from "react";
import { Row, Col } from "reactstrap";
import ButtonRadiusComponent from "Components/ButtonRadiusComponent";


const Blog = ({propsBlog}) => {

/*  console.log(propsBlog) */
  return (
    <div>
      <div className="row-wrapper">
        <Row>
          <Col md="6" lg="6">
            <img src={propsBlog.imgBlog} alt="SLICICA1" />
          </Col>
          <Col md="6" lg="6">
            <Row>
              <Col md="2" lg="2">
                <img src={propsBlog.imgBlog} alt="PROFILE" className="profile" />
              </Col>
              <Col md="10" lg="10">
                <p className="name">{propsBlog.autor.name} </p>
                <p className="date">{propsBlog.autor.create}</p>
              </Col>
            </Row>
            <Row>
              <Col md="12" lg="12" className="title">
                {propsBlog.title}
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md="12" lg="12" className="text-paragraph">
                {propsBlog.text}
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md="4">
                <ButtonRadiusComponent classes="transparent blue" text="read" />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <hr />
    </div>
  );
};

export default Blog;
