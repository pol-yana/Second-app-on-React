import React from "react";
import { Component } from "react";
import EditPost from "./EditPost";
import Count from "./Count";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameArticle: this.props.article,
      list: []
    };
    this.showPostFromEditPost = this.showPostFromEditPost.bind(this);
    this.arrayOfList = this.arrayOfList.bind(this);
    console.log(this.state);
  }
sendNumberToCount(){

}
  showPostFromEditPost(article) {
    console.log("Parent`s post: ", article);
  }

  arrayOfList(article) {
    this.setState(state => ({ list: state.list.concat([article]) }));
    console.log("List: ", this.state.list);
  }

  render() {
    return (
      <div>
        <div>
          <EditPost postFromEditPost={this.arrayOfList} />
          <Count number={this.state.list.length} />
        </div>
        <div>
          <ul>
            {this.state.list.map(article => {
              return <li>Article:  {article}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default List;
