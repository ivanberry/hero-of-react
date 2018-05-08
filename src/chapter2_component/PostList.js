import React, { Component } from 'react';
import PostItem from './PostItem';
import './PostList.css';

const data = [
  {id: 0, title: 'TT', author: 'tab', date: '2011111', vote: 0 },
  {id: 1, title: 'TT', author: 'tab', date: '2011111', vote: 0 },
  {id: 2, title: 'TT', author: 'tab', date: '2011111', vote: 0 }
];

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.timer = null;
    this.handleVote = this.handleVote.bind(this);
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      console.log('loading data');
      this.setState({
        posts: data
      });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  handleVote(id) {
    const posts = this.state.posts.map(item => {
      const newItem = item.id === id ? { ...item, vote: ++item.vote } : item;
      return newItem;
    });
    this.setState({
      posts
    });
  }

  render() {
    return (
      <div className='container'>
        帖子列表：
          <ul>
          {this.state.posts.map(
            item =>
              <PostItem
                post={item}
                onVote={this.handleVote}
                key={`post_${item.id}`}
              />
          )}
        </ul>
      </div>
    )
  }
}

export default PostList;