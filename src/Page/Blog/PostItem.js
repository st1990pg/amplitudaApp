import React from 'react';
import MainHeading from "../../Components/MainHeading";
import {ButtonRadius} from "../../Components";

const PostItem = ({post}) => {
    const {img, title, body, author, date} = post;
    console.log(post);
    return (
        <div className="post-item">
            <div className="post-item__image">
                <img src={img} alt=""/>
            </div>
            <div className="post-item__content">
                <div className="content__author">
                    <div className="author__avatar">
                        <img src={author.avatar} alt=""/>
                    </div>
                    <div className="author__details">
                        <div className="author__name">
                            <p>{author.name}</p>
                        </div>
                        <div className="author__date">
                            <p>{date}</p>
                        </div>
                    </div>
                </div>
                <div className="content__title">
                    <MainHeading text={title} classes="black"/>
                </div>
                <div className="content__text">
                    <p>{body} </p>
                </div>
                <div className="content__button">
                    <ButtonRadius classes="transparent blue" text="read"/>
                </div>
            </div>
        </div>
    );
};

export default PostItem;