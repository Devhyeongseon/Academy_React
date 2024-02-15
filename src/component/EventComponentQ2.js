import React, { useState } from 'react';

const EventComponentQ2 = () => {

  const [form, setForm] = useState( {data:'', result: ''} )


  let handleChange = (e) => {

    setForm({...form, data: e.target.value})
  }

  let handelClick =(e) => {
    setForm({ data:'', result : form.data})
  }


  return (
    <div>
        <hr/>
        <h3>인풋데이터 핸들링실습</h3>
        <pre>클릭시 데이터는 공백으로 결과는 인풋이입력한 값으로 처리</pre>

    <input type="text" onChange={handleChange} value={form.data} />
    <button type='button' onClick={handelClick}>추가하기</button>
    <h3>결과</h3>
    <p>{form.result}</p>

    </div>
  );
};

export default EventComponentQ2;

