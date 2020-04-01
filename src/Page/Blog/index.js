import React, { Component } from "react";
import { fetchBlog } from "Actions/blogAction";
import { connect } from "react-redux";
import Blog from "./Blog";

class Blogs extends Component {
  /*     constructor(props) {
    super(props);
    this.state = {
        all= this.props.allBlogs;
    };
  }  */

  componentDidMount() {
    /* console.log('cmpm') */
    this.props.fetchBlog();
  }

  render() {
    const all = this.props.allBlogs;
    const no = all.length;
    console.log(no);
    console.log(this.props.allBlogs);
    return (
      <div>
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
  allBlogs: state.blogPosts.blogs
});

export default connect(mapStateToProps, { fetchBlog })(Blogs);
