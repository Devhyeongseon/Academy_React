import React, { useState } from "react"

function MyTest() {
  let [cnt, setCnt] = useState(0)

  return (
    <div>
      <h2>실습2(++ 연산자 ~~)</h2>
      <h2>카운트:{cnt}</h2>

      <button type="button" onClick={function(){setCnt(cnt + 1)}}>
        증가
      </button>
      <button type="button" onClick={() => setCnt(cnt - 1)}>
        감소
      </button>
      <button type="button" onClick={() => setCnt(0)}>
        초기화
      </button>
    </div>
  )
}

export default MyTest


