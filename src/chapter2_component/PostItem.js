import React from 'react';

function PostItem (props) {
  const {post} = props;
  const handleClick = () => {
    props.onVote(post.id);
  };

  return (
    <li>
      <div>{post.title}</div>
      <div>创建人: {post.author}</div>
      <div>创建时间: {post.date}</div>
      <div>
        <button onClick={handleClick}>点赞</button>
        &nbsp;
          <span>{post.vote}</span>
      </div>
    </li>
  )
}

export default PostItem;