import {createStore} from "redux";
import reducer from "./reducer/Reducer";

let store = createStore(reducer);

export default store;