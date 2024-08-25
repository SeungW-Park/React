import React from 'react';
import {useState} from "react";
import {useDispatch} from "react-redux";

const ContactForm = () => {
  const DELAY = 300;
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useDispatch();

  // delay가 경과하기 이전에 이벤트가 발생하면 이전 타이머 취소하고 새로운 타이머 설정
  // delay보다 짧은 간격으로 이벤트가 발생되면 callback 호출되지 않음
  const debounce = (callback, delay) => {
    let timerId;
    return (...args) => {
      if (timerId) clearTimeout(timerId);
      timerId = setTimeout(callback, delay, ...args);
    }
  };

  const addContact = (event) => {
    if (name.trim() !== '' && phoneNumber.trim() !== '' && (/^(01[016789]{1})-?([0-9]{3,4})-?([0-9]{4})$/).test(
      phoneNumber)) {
      // 새로고침 막기
      event.preventDefault();
      dispatch({type: 'ADD_CONTACT', payload: {name, phoneNumber}});
      dispatch({type: "INCREMENT_NUMBER"});
      setName('');
      setPhoneNumber('');
    } else {
      event.preventDefault();
      alert('이름 또는 전화번호를 올바르게 입력해 주세요.');
    }
  };

  return (
    <form onSubmit={addContact}>
      <div className="name-zone">
        <input type="text" id="name" value={name} placeholder="Name"
               onChange={(event) => {
                 debounce(setName(event.target.value), DELAY);
               }}/>
      </div>
      <div className="number-zone">
        <input type="tel" id="number" value={phoneNumber}
               placeholder="Phone Number"
               onChange={(event) => {
                 debounce(setPhoneNumber(event.target.value), DELAY);
               }}/>
      </div>
      <button type="submit">등록</button>
    </form>
  );
};

export default ContactForm;