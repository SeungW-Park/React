import './App.css';
import {useState} from 'react';

let counter = 0;

function App() {
  const [counter2, setCounter2] = useState(0);
  const increase = () => {
    counter++;
    setCounter2(counter2 + 1); // 비동기적으로 작동한다.
    console.log('counter:', counter);
    console.log("counter2:", counter2);
  }

  // 1. 유저가 버튼을 클릭한다.
  // 2. counter + 1 해서 1이 된다.
  // 3. setState 함수 호출
  // 4. console.log 실행됨
  //변수 값은 1로 보이고 state값은 안변했기 때문에 그 전 값이 보인다.
  // app이 다시 re-render
  // let counter = 0;을 거치면서 counter 값은 다시 0으로 초기화
  // state 값은 react에서 관리한다.

  return (
    <div>
      <div>{counter}</div>
      <div>state:{counter2}</div>
      <button onClick={ increase }>클릭!</button>
    </div>
  );
}

export default App;
