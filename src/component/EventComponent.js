

import React, { useState } from 'react';



const EventComponent = () => {

  const [topic, setTopic] = useState('')
  const [name, setName] = useState('')
  const [change, setChange] = useState('')
  

 let handleTopic = (e) => {
    // console.log(e.target);
    // console.log(e.target.value);
    setTopic(e.target.value);
  }

  let handleName = (e) => setName(e.target.value);

let handleChange = () => {
  alert(`${name} 님의 할일 ${topic}`);
  setTopic('');
  setName('') ;
}

let handlePress = (e) => {
  if(e.key === 'Enter') {
    handleChange();
  }
}

  return (
    <div>
      <h3>인풋태그 핸들링</h3>
      
      <input type="text" onChange={handleTopic} value={topic} placeholder='할 일' />
      <input type="text" onChange={handleName} value={name} placeholder='이름'/>
      <br />

      <button type='button' onClick={handleChange}>클릭!</button>
      할 일: {topic}
    </div>
    
  );
};

export default EventComponent;

