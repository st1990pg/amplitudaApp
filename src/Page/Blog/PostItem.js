import React from 'react';
import {ButtonRadius} from "../../Components";

const PostItem = ({post}) => {
    const {img, title, body, author, date} = post;
    return (
        <div className="blog-post-div">
          <img className="blog-img" src={img} alt="slika" />
          <div  className="blog-text-div">
            <div className="autor-div">
              <img src={author.avatar} alt="autor" />
              <div>
                <h4 className="autor-name">{author.name}</h4>
                <p className="autor-date">{date}</p>
              </div>
            </div>
            <h2 className="blog-heading">{title}</h2>
            <p className="blog-p">
                {body}
            </p>
            <ButtonRadius classes="button-radius" text="Pročitaj"></ButtonRadius>
          </div>
        </div>
    );
};

export default PostItem;