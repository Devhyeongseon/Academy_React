


import React, { useState } from 'react';

const IterationComponent2 = () => {

  //state로 관리할 배열을 하나 생성

  const data = [
    {id:1, topic:'hello'},
    {id:2, topic:'bye'},
    {id:3, topic:'안녕!'}
  ] //나중에 어디선가 데이터받아옴.
  
  const [list, setList] = useState(data)//할일목록
  const [topic, setTopic] = useState('')//인풋데이터

  //삭제기능 - 익명함수(위쪽에선언)
  let handleRemove = () => {
    //filter -> 리턴 true 인 값으로 필터링
    //state값을 필터링
    // list.filter ( item => { item 
    //   return 
    // })
  }


  //state를 반복으로 돌려서 li로 출력
  const lis = list.map( a => <li key={a.id} onDoubleClick={ () => handleRemove(a.id) }> {a.topic} </li>)

  //인풋데이터핸들링
  let handleInput = (e) => {
    setTopic(e.target.value)
  }

  //클릭이벤트핸들링 => 인풋데이터를 {id:~, topic:인풋데이터} -> list 에 반영
  let handleClick = () => {
    let obj = {id: list[list.length - 1].id + 1, topic: topic}

    let newList = list.concat(obj);
    setList(newList);
  }

  //
  

  return (
    <div>
      <h3>할일목록 추가 or 삭제하기</h3>

      <input type="text" name="topic" onChange={handleInput} value={topic} placeholder='할일목록을 적으세요' />
      <button type="button" onClick={handleClick}>추가하기</button>
 
      <ul>
        {lis}
      </ul>
    </div>
  );
};

export default IterationComponent2;