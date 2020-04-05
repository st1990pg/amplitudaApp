import React, {useEffect, useState} from 'react';
import PostItem from "./PostItem";
import {fetchPosts, makePost} from "Actions/postsAction";
import {connect} from "react-redux";
import MainHeading from "../../Components/MainHeading";
import {ButtonRadius} from "../../Components";
import ModalWrapper from "../../Components/Modals/ModalWrapper";
import useToggle from "../../hooks/useToggle";
import AddPost from "../../Components/Modals/AddPost";


const Posts = (props) => {
    const [addModal, toggleModal] = useToggle(false);
    const {posts} = props;

    useEffect(() => {
        props.fetchPosts();
    }, []);

    return (
        <div className="blog-wrapper-div">
            <div className="add-post">
                <ButtonRadius classes="add-button-radius" text="Create post" onclick={toggleModal}/>
            </div>
            <ModalWrapper show={addModal}>
                <AddPost close={toggleModal} />
            </ModalWrapper>
            {

                posts.length === 0
                ? <div className="no-posts"><MainHeading text="No Posts Yet"/></div>
                : posts.map(post => <PostItem post={post} key={post.id}/>)
            }
        </div>
    );
};


const mapStateToProps = state => ({
    posts: state.postovi.posts.reverse(),
});

export default connect(mapStateToProps, { fetchPosts, makePost })(Posts);