let initialState = {
  contactList: [],
  listNumber: 0,
  searchListNumber: 0,
  searchList: [],
  isSearching: false
};

function reducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        isSearching: false,
        contactList: [...state.contactList, {
          name: payload.name,
          phoneNumber: payload.phoneNumber
        }]
      };
    case "INCREMENT_NUMBER":
      return {...state, listNumber: state.listNumber + 1};
    case "SEARCH":
      const filteredList = state.contactList.filter((item) => {
        return (item.name === payload.search) || (item.phoneNumber.includes(
          payload.search));
      });
      return {
        ...state,
        isSearching: true,
        searchList: filteredList,
        searchListNumber: filteredList.length
      };
    case "VIEW_ALL":
      return {...state, isSearching: false};
    default:
      return {...state};
  }
}

export default reducer;