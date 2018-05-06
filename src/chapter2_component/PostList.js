import React, { Component } from 'react';
import { PostItem } from './PostItem';

const data = [
  { title: 'TT', author: 'tab', date: '2011111' },
  { title: 'TT', author: 'tab', date: '2011111' },
  { title: 'TT', author: 'tab', date: '2011111' }
];

class PostList extends Component {
  render() {
    return (
      <div>
        帖子列表：
          <ul>
          {data.map(
            item =>
              <PostItem
                title={item.title}
                author={item.author}
                date={item.date}
              />
          )}
        </ul>
      </div>
    )
  }
}

export default PostList;