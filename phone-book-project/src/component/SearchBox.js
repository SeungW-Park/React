import React from 'react';
import {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

const SearchBox = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const searchedList = useSelector(state => state.searchList);
  const contactList = useSelector(state => state.contactList);

  const getSearch = () => {
    if (search.trim() !== '') {
      dispatch({type: "SEARCH", payload: {search}});
      console.log('dispatched SEARCH:', search);
      setTimeout(() => setSearch(''), 150);
    } else {
      alert('검색어를 입력해주세요.');
    }
  };

  useEffect(() => {
    console.log('contactList:', contactList);
    console.log('Updated searchedList:', searchedList);
  }, [searchedList])

  return (
    <div className="search-box">
      <input type="text" value={search} placeholder="Search"
             onChange={(event) => {
               setSearch(event.target.value)
             }}
             onKeyUp={(event) => {
               if (event.key === 'Enter') {
                 getSearch();
               }
             }}/>
      <button className="search-button" onClick={getSearch}>검색
      </button>
    </div>
  );
};

export default SearchBox;