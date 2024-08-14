import { useState } from 'react';
import './App.css';
import ResultBox from './component/ResultBox';

// 1. 유저는 박스 2개를 볼 수 있다.(타이틀, 사진정보, 결과값)
// 2. 유저는 박스 하단에 가위 바위 보 버튼을 볼 수 있다.
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임.
// 4. 버튼을 클릭하면 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3/4 결과를 비교하여 누가 이겼는지 승패를 따진다.
// 6. 결과에 따라서 테두리 색과 결과값 텍스트를 변경한다.

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
}

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [comSelect, setComSelect] = useState(null);
  const [result, setResult] = useState('');
  const [userScore, setUserScore] = useState(0);
  const [comScore, setComScore] = useState(0);

  const play = (userChoice) => {
    const userItem = choice[userChoice];
    setUserSelect(userItem);
    let comItem = randomChoice();
    setComSelect(comItem);
    const gameResult = judge(userItem, comItem);
    setResult(gameResult);
    updateScore(gameResult);
  };

  const judge = (user, computer) => {
    if (user.name === computer.name) {
      return '비겼다!';
    } else if (user.name === 'Rock') {
      return computer.name === 'Scissor' ? '이겼다!' : '졌다!';
    } else if (user.name === 'Scissor') {
      return computer.name === 'Paper' ? '이겼다!' : '졌다!';
    } else if (user.name === 'Paper') {
      return computer.name === 'Rock' ? '이겼다!' : '졌다!';
    }
  }

  const randomChoice = () => {
    let itemArr = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArr.length);
    let result = itemArr[randomItem];

    return choice[result];
  } 

  const updateScore = (gameResult) => {
    if (gameResult === '이겼다!') {
      setUserScore(prevScore => prevScore + 1);
    } else if (gameResult === '졌다!') {
      setComScore(prevScore => prevScore + 1);
    }
  };

  const resetGame = () => {
    setUserSelect(null);
    setComSelect(null);
    setResult('');
    setUserScore(0);
    setComScore(0);
  };

  return (
    <div className="background">
      <div className="main-container">
        <div className="game-title"> 추억의 가위바위보 게임 <span class="title-icon">👉 ✊ 🖐️</span></div>
        <div className="result-container">
          <div className="result-wrapper">
            <div className="point-area">
              <span className="point-title">MY POINT</span>
              <span className="point-num">{userScore}</span>
            </div>
            <div className="divide-line"></div>
            <div className="point-area">
              <span className="point-title">COM POINT</span>
              <span className="point-num">{comScore}</span>
            </div>
          </div>
          <button className="reset-button" onClick={() => resetGame()}>Reset</button>
        </div>
        <div className="result-box-wrapper">
          <ResultBox name="나" item={userSelect} result={result}/>
          <div className="divide-line"></div>
          <ResultBox name="컴퓨터" item={comSelect} result={result}/>
        </div>
        <div className="select-wrapper">
          <div className="select-item" onClick={() => play('paper')}><img src={choice.paper.img}/></div>
          <div className="select-item" onClick={() => play('scissor')}><img src={choice.scissor.img}/></div>
          <div className="select-item" onClick={() => play('rock')}><img src={choice.rock.img}/></div>
        </div>
      </div>
    </div>
  );
}

export default App;