import { useRef } from "react"



function HookRef() {

  //특정태그에 이름달기
  let inputRef = useRef(null)

  let handleClick = () => {
    //요기에서는 input의 value값을 얻어야 합니다.

    // console.log(inputRef)
    console.log(`input태그 입력값 : ${inputRef.current.value}`)
    console.log(`input태그 타입 : ${inputRef.current.type}`)
    inputRef.current.value=''
  }


  return (
    <div>
      <h3>useRef사용</h3>
      할일:<input type="text"  ref={inputRef}/>
      <button type="button" onClick={handleClick}>useRef사용하기</button>

    </div>
  )
}

export default HookRef