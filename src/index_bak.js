import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";

//변형자
const reducer = (state, action) => {
  console.log(action);
  if(action.type === 'changeState'){
    return action.payload;
  }
  return 'State';
}

//스토어 생성
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());//reducer(변형자)
console.log(store);
console.log('createStore:', store.getState());

//1 : 가입
store.subscribe(() => console.log('subscribe: ', store.getState()));


//action dispatch test
const action = {
  type: 'changeState',
  payload: 'new State'
}

//2. action dispatch
store.dispatch(action);

console.log('After Dispatch:', store.getState());


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
