import {useState, useEffect} from 'react';
import React from 'react'
import './ResultBox.css'

const ResultBox = (props) => {
  const [image, setImage] = useState('https://cdn.pixabay.com/photo/2016/05/28/05/40/question-mark-1421017_1280.png');

  useEffect(() => {
    if (props.item && props.item.img) {
      setImage(props.item.img);
    } else {
      setImage('https://cdn.pixabay.com/photo/2016/05/28/05/40/question-mark-1421017_1280.png');
    }
  }, [props.item]);


  let result = '';
  if (props.name === '컴퓨터' && props.result !== '비겼다!' && props.result !== '') {
    result = props.result === '이겼다!' ? '졌다!' : '이겼다!';
  } else {
    result = props.result;
  }

  let resultColor = 'tie';
  if (result === '비겼다!') {
    resultColor = 'tie';
  } else if (result === '이겼다!') {
    resultColor = 'win';
  } else if (result === '졌다!') {
    resultColor = 'lose';
  }

  return (
    <div className={`box-container ${resultColor}`}>
      <div className="box-title">{props.name}</div>
      <img className="result-img" src={image} alt="결과 이미지"></img>
      <div className={`result-text ${resultColor}-text`}>{result}</div>
    </div>
  )
}

export default ResultBox