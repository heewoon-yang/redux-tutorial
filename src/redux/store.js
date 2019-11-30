//스토어 생성
import {createStore} from "redux";
import {allReducers} from "./reducers";

export const store = createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());//reducer(변형자)
console.log(store.getState());//컴바인리듀서스에서 리턴한 결과가 출력됨