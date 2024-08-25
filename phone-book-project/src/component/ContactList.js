import React from 'react';
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";

const ContactList = () => {
  const contactList = useSelector(state => state.contactList);
  const searchedList = useSelector(state => state.searchList);
  const searchListNumber = useSelector(
    state => state.searchListNumber);
  const listNumber = useSelector(state => state.listNumber);
  const isSearching = useSelector(state => state.isSearching);
  const dispatch = useDispatch();

  return (
    <div className="contact-list">
      <button className="view-all"
              onClick={() => dispatch({type: "VIEW_ALL"})}>전체보기
      </button>
      <SearchBox/>
      <div className="contact-items">
        <span className="item-num">연락처 : <span
          className="item-num-detail">{isSearching ? searchListNumber : listNumber}개</span></span>
        {isSearching ?
          searchedList.map((item, index) => (
            <ContactItem key={index} item={item}/>
          )) :
          contactList.map((item, index) => (
            <ContactItem key={index} item={item}/>
          ))}
      </div>
    </div>
  );
};

export default ContactList;