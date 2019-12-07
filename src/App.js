import React from 'react';
import './App.css';
import {connect, useDispatch, useSelector} from "react-redux";
import {updateUser} from "./redux/actions";


function App() {

  // console.log(props)

  const products = useSelector(state => state.products);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <p>{user}</p>
      <button onClick={() => dispatch(updateUser('LDK'))}>액션 디스패치 테스트</button>
    </div>
  );
}

//부모가 자식과 통신하는 방법
// const mapStateToProps = (state) => ({
//   //왼쪽이 props,  오른쪽이 store의 state
//   products: state.products,//store에 있는 state
//   user: state.user
// });

//자식이 부모와 통신하는 방법
//(액션을 디스패치하는) 펑션을 props로 매핑
// const mapActionToProps = (dispatch) => ({
//   //왼쪽이 props, 오른쪽 (액션을 디스패치하는)펑션
//   updateUser : (name) => dispatch(updateUser(name))//updateUser(name) ==> action임
// });

// 문법:커링펑션,
// 개념: Hoc:입력파라메터에 컴퍼넌트를 넣어서 새로운 기능의 컴포넌트를 리턴하는 펑션
// export default connect(mapStateToProps, mapActionToProps)(App);

export default App;

/*
import React from 'react';
import './App.css';
import {connect} from "react-redux";
import {updateUser} from "./redux/actions";

function App(props) {
  return (
    <div className="App">
      <p>{props.products.length}</p>
      <p>{props.user}</p>
      <button onClick={() => props.updateUser('Jane')}>액션 디스패치</button>
    </div>
  );
}

// subscribe: 스토어의 state를 props로 매핑하기
const mapStateToProps = (state) => ({
  // 왼쪽은 props, 오른쪽은 store의 state
  products: state.products,
  user: state.user
});

// publish: (액션을 디스패치하는) 펑션을 props 로 매핑하기
const mapActionToProps = (dispatch) => ({
  // 왼쪽은 props, 오른쪽은 (액션을 디스패치하는) 펑션
  updateUser: (name) => dispatch(updateUser(name))
})

// 문법적으로는 파라메터를 차례대로 넣는 커링 펑션
// 결과적으로 만드는것은 App을 입력으로해서 새로운 HoC 컴포넌트를 만든다.
export default connect(mapStateToProps, mapActionToProps)(App);
*/