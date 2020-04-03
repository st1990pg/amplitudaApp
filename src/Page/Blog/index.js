import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import { fetchBlog , makeBlog } from "Actions/blogAction";
import { connect } from "react-redux";
import Blog from "./Blog";
import ButtonRadiusComponent from "Components/ButtonRadiusComponent";
import Modal from "./Modal";


class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }

  componentDidMount() {
    /* console.log('cmpm') */
    this.props.fetchBlog();
  }

  render() {
    const all = this.props.allBlogs;
    const no = all.length;
  /*   console.log(no);
    console.log(this.props.allBlogs); */
    return (
      <div>
        <Container>
          <Row className="justify-content-md-center mt-3">
            <Col xs lg="3" className="mt-4">
              <h1>Dodaj blog:</h1>
            </Col>
            <Col xs lg="2">
              <ButtonRadiusComponent
                classes="blue"
                text="Post"
                onclick={this.showModal}
              />
              <Modal show={this.state.show} handleClose={this.hideModal}>
              </Modal>
            </Col>
          </Row>
        </Container>
        {no === 0 ? (
          <h1>No BLOGS YES</h1>
        ) : (
          all.map(blogic => <Blog propsBlog={blogic} key={blogic.id} />)
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  allBlogs: state.blogPosts.blogs.reverse()
});

export default connect(mapStateToProps, { fetchBlog, makeBlog})(Blogs);
