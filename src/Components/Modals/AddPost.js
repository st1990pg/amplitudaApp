import React from 'react';
import MainHeading from "../MainHeading";
import Cancel from "../../img/cancel.svg";
import InputTextComponent from "../InputTextComponent";
import UseField from "../../hooks/useField";
import {ButtonRadius, TextArea} from "../index"
import {fetchPosts, makePost} from "Actions/postsAction";
import {connect} from "react-redux";

const AddPost = (props) => {
    const [title, changeTitle] = UseField('');
    const [body, changeBody] = UseField('');

    const onSubmitHandler = () => {
        const payload = {
            "title":title,
            "body":body,
            "img": "src/img/Happy-Children.png",
            "author": {
                "name": "Milica Markovic",
                "avatar":"src/img/Happy-Children.png"
            },
            "date":"30.03.2020"
        };
        props.makePost(payload);
        props.close();
    };

    return (
        <div className="add-post-modal">
            <div className="add-post-modal__heading">
                <span></span>
                <MainHeading text="Dodaj Post" style={{ flex: 1 }} />
                <img src={Cancel} alt="cancel_button" onClick={props.close} />
            </div>
            <div className="add-post-modal__content">
                <div className="content-title">
                    <InputTextComponent label="Naslov bloga" value={title} onchange={changeTitle} type="email"/>
                </div>
                <div className="content-body">
                    {/*<InputTextComponent label="Tekst bloga" value={body} onchange={changeBody}/>*/}
                    <TextArea placeholder="Tekst Bloga" onchange={changeBody}/>
                </div>
            </div>
            <div className="add-post-modal__footer">
                <ButtonRadius text="Add Post" onclick={onSubmitHandler}/>
            </div>
        </div>
    );
};

export default connect(null, { makePost })(AddPost);