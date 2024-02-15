import { Fragment } from "react"
import MyComponent from "./component/MyComponent"
import MyComponent2 from "./component/MyComponent2"
import MyComponent3 from "./component/MyComponent3"
import StateComponent from "./component/StateComponent"
import MyTest from "./component/MyTest"

function App() {
  let name = "홍길동"
  let phone = "010-1234-1234"

  return (
    <Fragment>
      <h3>나의 첫번째 컴포넌트</h3>
      {/* 
      {/*<div>
          자식 컴포넌트
          <br />
          변수값: {name}
          <br />
          변수값: {phone}
          <br />
        </div> */}
      {/* <MyComponent name="홍길동" phone={"010-1234-1234"} age={1} />
      <MyComponent name="이순신" phone={"010-2222-3333"} age={2} />
      <MyComponent name="네임만 줄거다" />
      <MyComponent2 />
      <br />
      <MyComponent3 />
      <MyComponent3 age={10} /> */}
      <hr />
      <StateComponent />

      <hr />

      <MyTest />
    </Fragment>
  )
}

export default App
