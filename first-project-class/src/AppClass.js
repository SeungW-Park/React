import React, { Component } from 'react'
import './AppClass.css';
import BoxClass from './component/BoxClass';


const choice = {
  rock: {
    name: "Rock",
    img: "https://shape2ee.github.io/RockScissorPaper/images/rock.svg"
  },
  scissor: {
    name: "Scissor",
    img: "https://shape2ee.github.io/RockScissorPaper/images/scissors.svg"
  },
  paper: {
    name: "Paper",
    img: "https://shape2ee.github.io/RockScissorPaper/images/paper.svg"
  }
};


export default class AppClass extends Component {

// 1. 유저는 박스 2개를 볼 수 있다.(타이틀, 사진정보, 결과값)
// 2. 유저는 박스 하단에 가위 바위 보 버튼을 볼 수 있다.
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임.
// 4. 버튼을 클릭하면 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3/4 결과를 비교하여 누가 이겼는지 승패를 따진다.
// 6. 결과에 따라서 테두리 색과 결과값 텍스트를 변경한다.
constructor() {
  super();
  this.state = {
    userSelect: null,
    comSelect: null,
    result: '',
    myScore: 0,
    comScore: 0
  };
}

randomChoice() {
  const itemArr = Object.keys(choice);
  const randomNum = Math.floor(Math.random() * itemArr.length);
  const choiceResult = itemArr[randomNum];

  return choice[choiceResult];
}

judge(userSelect, comSelect) {
  if (userSelect.name === comSelect.name) {
    return '비겼다!';
  } else if (userSelect.name === 'Rock') {
    return comSelect.name === 'Scissor' ? '이겼다!' : '졌다!';
  } else if (userSelect.name === 'Paper') {
    return comSelect.name === 'Rock' ? '이겼다!' : '졌다!';
  } else if (userSelect.name === 'Scissor') {
    return comSelect.name === 'Paper' ? '이겼다!' : '졌다!';
  }
}

updateScore(result) {
  this.setState(prevState => {
    if (result === '이겼다!') {
      return { myScore: prevState.myScore + 1 };
    } else if (result === '졌다!') {
      return { comScore: prevState.comScore + 1 };
    } else {
      return null;
    }
  });
}

resetGame() {
  this.setState({
    userSelect: null,
    comSelect: null,
    result: '',
    myScore: 0,
    comScore: 0
  }); 
}

play(userChoice) {
  const userItem = choice[userChoice];
  const comItem = this.randomChoice();

  const gameResult = this.judge(userItem, comItem);
  this.setState({
    userSelect: userItem,
    comSelect: comItem,
    result: gameResult
  });
  this.updateScore(gameResult);
}

render() {
    return (
      <div className="background">
      <div className="main-container">
        <div className="game-title"> 추억의 가위바위보 게임 <span class="title-icon">👉 ✊ 🖐️</span></div>
        <div className="result-container">
          <div className="result-wrapper">
            <div className="point-area">
              <span className="point-title">MY POINT</span>
              <span className="point-num">{this.state.myScore}</span>
            </div>
            <div className="divide-line"></div>
            <div className="point-area">
              <span className="point-title">COM POINT</span>
              <span className="point-num">{this.state.comScore}</span>
            </div>
          </div>
          <button className="reset-button" onClick={() => this.resetGame()}>Reset</button>
        </div>
        <div className="result-box-wrapper">
          <BoxClass name="나" item={this.state.userSelect} result={this.state.result}/>
          <div className="divide-line"></div>
          <BoxClass name="컴퓨터" item={this.state.comSelect} result={this.state.result}/>
        </div>
        <div className="select-wrapper">
          <div className="select-item" onClick={() => this.play('paper')}><img src={choice.paper.img}/></div>
          <div className="select-item" onClick={() => this.play('scissor')}><img src={choice.scissor.img}/></div>
          <div className="select-item" onClick={() => this.play('rock')}><img src={choice.rock.img}/></div>
        </div>
      </div>
    </div>
    )
  }
}
