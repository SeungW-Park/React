import './App.css';
import ContactForm from "./component/ContactForm";
import ContactList from "./component/ContactList";

// 1. 왼쪽에는 연락처 등록하는 폼이, 오른쪽에는 연락처 리스트와 search 창이 있다.
// 2. 유저가 이름과 번호를 추가할 수 있다.
// 3. 리스트에 아이템이 몇 개 있는지 보인다.
// 4. 사용자가 유저를 이름 검색으로 찾을 수 있다.

function App() {
  return (
    <div className="App">
      <h1 className="book-title">Phone Book</h1>
      <div className="book-info">
        <div className="create-box">
          <span className="box-title">연락처 저장</span>
          <ContactForm/>
        </div>
        <div className="seek-box">
          <span className="box-title">연락처</span>
          <ContactList/>
        </div>
      </div>
    </div>
  );
}

export default App;
