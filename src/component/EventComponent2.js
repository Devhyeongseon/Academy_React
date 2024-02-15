import React, { useState } from 'react';

const EventComponent2 = () => {

  //스테이트를 객체로 관리하기
  let [data, setData]= useState({name: '', topic: '집 가기'})
  let handleInput = (e) => {
    // e.target.value - 사용자가 입력한 값
    let value = {...data, [e.target.name]: e.target.value} //기존값 복사, 특정키만 바꾸는 문법
    setData(value)
  }
 

  return (
    <div>
       <h3>인풋태그 핸들링</h3>
      
      <input type="text" onChange={handleInput} name="topic" value={data.topic} placeholder='할 일' />
      <input type="text" onChange={handleInput} name="name" value={data.name} placeholder='이름'/>
      <br />

      <button type='button' onClick={() => setData({name: '', topic: ''})}>클릭! 초기화</button>
      할 일: {data.topic}, 이름 : {data.name}
    </div>
  );
};

export default EventComponent2;