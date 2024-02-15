import PropTypes from "prop-types"

function MyComponent(/* props */ { name, phone, age }) {
  // console.log(props);
  // let name = "홍길동";
  // let phone = "010-1234-1234";

  // let name = props.name;
  // let phone = props.phone;
  // let age = props.age;

  // let { name, phone, age } = props;
  return (
    <div>
      자식 컴포넌트
      <br />
      변수값: {name}
      <br />
      변수값: {phone}
      <br />
      변수값: {age}
      <br />
    </div>
  )
}

//값 안주는 요소들 default 값 지정.
MyComponent.defaultProps = {
  phone: "010-0000-0000",
  age: 0,
}

//props의 기본값 설정(대소문자 구분함.)
//컴포넌트명.propsTypes = {}

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  phone: PropTypes.string,
}

export default MyComponent
