import React, { Component } from "react";
import EditPost from "./EditPost";

class App extends Component{
  constructor(props) {
    super(props);
    this.getPostFromEditPost = this.getPostFromEditPost.bind(this);
  }

  getPostFromEditPost(article) {
    console.log("Parent`s post: ", article)
  }

  render() {
    return (
      <div className="App">
        <EditPost givePostForList={this.getPostFromEditPost} />
      </div>
    );
  }
}

export default App;
