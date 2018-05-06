import React, {Component} from 'react';

export class PostItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vote: 0,
    }
  };

  handleChile() {
    let vote = this.state.vote;
    vote++;
    this.setState({
      vote
    });
  }

  render() {
    const {title, author, date} = this.props;
    return (
      <li>
        <div>{title}</div>
        <div>创建人: {author}</div>
        <div>创建时间: {date}</div>
        <div>
          <button onClick={() => this.handleChile()}>点赞</button>
          <span>{this.state.vote}</span>
          </div>
      </li>
    )
  }
}