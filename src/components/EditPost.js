import React from "react";
import { Component } from "react";

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: "Post"
    };
    this.edit = this.edit.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.givePostForList = this.givePostForList.bind(this);
    this.getPostFromEditPost = this.getPostFromEditPost.bind(this);
  }

  givePostForList(){
    this.props.getPostFromEditPost(this.state.post);
  }

  edit(event) {
    this.setState({
      post: event.target.value
    });
    console.log("Post: ", this.state.post);
    //this.givePostForList();
    this.props.getPostFromEditPost(this.state.post);
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
        <button onClick={this.edit}>Edit</button>
      </div>
    );
  }
}
export default EditPost;
