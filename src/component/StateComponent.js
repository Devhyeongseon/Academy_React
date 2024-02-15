import React, { useState } from "react"

const StateComponent = () => {
  // //함수형 컴포넌트에서 useState() 훅을 사용합니다.
  // const arr = useState("초기값")
  // console.log(arr)

  let [data, setData] = useState("지원아 정신차려")
  let [color, setColor] = useState("red")

  let change = function (e) {
    setData("지원이가 정신을차렸습니다") //state 값을 체인지 -> 화면을 다시그리게됩니다.
    // console.log(data)
  }

  //2nd
  // let unChange = () => setData("지원아 정신차려");

  return (
    <div>
      <h3>스테이트 사용하기</h3>
      <button type="button" onClick={change}>
        정신차려!
      </button>

      {data}
    </div>
  )
}

export default StateComponent
