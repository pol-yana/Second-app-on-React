import React from "react";
import { Component } from "react";

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: "Post"
    };
    this.editPost = this.editPost.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.sendPostToList = this.sendPostToList.bind(this);
    
  }

  sendPostToList() {
    this.props.postFromEditPost(this.state.post);
  }

  editPost(event) {
    this.setState({
      post: event.target.value
    });
    console.log("Post: ", this.state.post);
    this.sendPostToList();
    
  }

  updatePost(event) {
    this.setState({
      post: event.target.value
    });
    console.log(this.state.post);
  }

  render() {
    return (
      <div>
        <form>
          <input
            value={this.state.post}
            onChange={this.updatePost}
            type="text"
          />
        </form>
        <button onClick={this.editPost}>Edit</button>
      </div>
    );
  }
}
export default EditPost;
