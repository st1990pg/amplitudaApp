import React from "react";
import { Row, Col, Container } from "reactstrap";
import Cancel from "../../img/cancel.svg";
import InputTextComponent from "../../Components/InputTextComponent";
import UseField from "../../hooks/useField";
import TextArea from "../../Components/TextAreaComponent";
import ButtonRadius from "../../Components/ButtonRadiusComponent";
 import { makeBlog } from "Actions/blogAction";
import { connect } from "react-redux"; 
import axios from "axios";

import "./Modal.scss";

const Modal = ({ handleClose, show }) => {

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const [title, changeTitle] = UseField("");
  const [text, changeTextArea] = UseField("");

  const onSubmit = () => {
    const blog = {
      title: title,
      imgBlog: "src/img/Happy-Children.png",
      text: text,
      autor: {
        profile: "src/img/Happy-Children.png",
        name: "Milica Markovic",
        create: "30.03.2020"
      }  
    };
    console.log(blog);
/* 
    axios.post('/blogs', { blog })
      .then(res => {
        console.log(res);
        console.log(res.data);
      }); */

    console.log(makeBlog());
    makeBlog(blog);
    handleClose();
  };

  return (
    <div className={showHideClassName}>
      <Container className="modal-main">
        <Row>
          <Col md="10">
            <h1>Dodaj blog</h1>
          </Col>
          <Col md="2" className="end">
            <img src={Cancel} alt="cancel_button" onClick={handleClose} />
          </Col>
        </Row>
        <Row className="justify-content-md-center mt-4">
          <Col md="6" className="text_center">
            <InputTextComponent
              label="Naslov bloga"
              value={title}
              onchange={changeTitle}
              type="email"
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center mt-4">
          <Col md="6" className="text_center">
            <TextArea placeholder="Tekst Bloga" onchange={changeTextArea} />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={{ size: 3, offset: 6 }}>
            <ButtonRadius text="send" onclick={onSubmit} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default  connect(null, { makeBlog })(Modal);
