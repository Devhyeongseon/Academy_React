import { useEffect, useState } from "react";



function HookEffect() {
  
  let[name, setName] = useState('')
  let[age, setAge] = useState(0)
  
  console.log(1)
  //useEffect(실행시킬 콜백, 배열)


  useEffect( () => {
    console.log('특정값이 업데이트될때마다 실행')
  }, [name])
  
  console.log(2)


  return (
    <>
      이름: <input type="text" name="name" onChange={ (e) => setName(e.target.value)} value={name}/>
      나이: <input type="text" name="age" onChange={ (e) => setAge(e.target.value)} value={age}/>
    <br/>
      이름: {name}, 나이: {age}
    </>


  )
}

export default HookEffect;