import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const count = useSelector((state) => state.count);
  // const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const increase = (num) => {
    dispatch({ type: "INCREMENT", payload: { num } });
    // setCount(count + 1);
  };

  const decrease = (num) => {
    if (count - num > 0) {
      dispatch({ type: "DECREMENT", payload: { num } });
    } else {
      dispatch({ type: "MAKE0" });
    }
  };

  return (
    <div>
      <h1>숫자 조절하기  * 숫자는 0보다 작을 수 없습니다.</h1>
      <h2>숫자 : {count}</h2>
      <div>
        <button onClick={() => increase(1)}>1씩 증가</button>
        <button onClick={() => increase(5)}>5씩 증가</button>
      </div>
      <div>
        <button onClick={() => decrease(1)}>1씩 감소</button>
        <button onClick={() => decrease(5)}>5씩 감소</button>
      </div>
    </div>
  );
}

export default App;
