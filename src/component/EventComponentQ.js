import React, { useState } from 'react';

const EventComponentQ = () => {

  let [data, setData] = useState('메뉴를 선택하세요.')


  return (
    <div>
      <h2>셀렉트 태그 핸들링 실습</h2>
      <select onChange={ (e) => setData(e.target.value) }>
        <option>피자</option>
        <option>햄버거</option>
        <option>치킨</option>
      </select>

      <h3>선택한 결과</h3>
      <p>{data}</p>
    </div>
  );
};

export default EventComponentQ;