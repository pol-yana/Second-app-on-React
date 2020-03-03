import React, { Component } from "react";
//import EditPost from "./EditPost";
import List from "./List";
//import Count from "./Count";

class App extends Component {
  constructor(props) {
    super(props);
    //this.showPostFromEditPost = this.showPostFromEditPost.bind(this);
    this.nameArticle = "BlaBla";
  }

  // showPostFromEditPost(article) {
  //   console.log("Parent`s post: ", article);
  //   //this.props.post
  // }

  render() {
    return (
      <div className="App">
    
        <List article ={this.nameArticle} />
      </div>
    );
  }
}

export default App;
