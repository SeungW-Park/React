import React, { Component } from 'react'
import './BoxClass.css';

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.result = '';
    this.resultColor = 'tie';
    this.state = {
      image: 'https://cdn.pixabay.com/photo/2016/05/28/05/40/question-mark-1421017_1280.png'
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.item !== this.props.item) {
      if (this.props.item && this.props.item.img) {
        this.setState({ image: this.props.item.img });
      } else {
        this.setState({
          image: 'https://cdn.pixabay.com/photo/2016/05/28/05/40/question-mark-1421017_1280.png'
        });
      }
    }
  }

  switchResult() {
    if (this.props.name === '컴퓨터' && this.props.result !== '비겼다!' && this.props.result !== '') {
      this.result = this.props.result === '이겼다!' ? '졌다!' : '이겼다!';
    } else {
      this.result = this.props.result;
    }
  }

  setColor() {
    if (this.result === '비겼다!' || this.result === '') {
      this.resultColor = 'tie';
    } else {
      this.resultColor = this.result === '이겼다!' ? 'win' : 'lose';
    }
  }

  render() {
    this.switchResult();
    this.setColor();
    return (
    <div className={`box-container ${this.resultColor}`}>
      <div className="box-title">{this.props.name}</div>
      <img className="result-img" src={this.state.image} alt="결과 이미지"></img>
      <div className={`result-text ${this.resultColor}-text`}>{this.result}</div>
    </div>
    )
  }
}
