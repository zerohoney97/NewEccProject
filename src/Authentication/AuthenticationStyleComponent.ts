import styled from "styled-components";

// 로그인 페이지 전체 컴포넌트를 감싸는 컨테이너
const SignInContainer = styled.div`
  margin: auto;
  margin-top: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 30vw;
`;
// ecc 문구

const EccText = styled.h3`
  font-family: "roboto";
`;

// 로그인 정보를 기입하는 inputarea를 감싸는 컨테이너
const SignInInputAreaContainer = styled.div`
  margin-top: 50px;
`;
// inputarea스타일링
const SignInInputArea = styled.input`
  width: 80%;
  margin: 10px;
  padding: 10px;
  border: black solid 1px;
  font-size: 15px;
`;

// 자동 로그인 컨테이너
const AutoLoginCotainer = styled.div`
  display: flex;
  width: 100%;
  height: 2rem;
  position: relative;
  padding: 30px;
`;
// 자동로그인
const AutoLogin = styled.input`
  height: 27.5px;
  width: 27.5px;
  cursor: pointer;
`;

// 로그인 버튼

const LoginButton = styled.button`
  width: 80%;
  height: 40px;
  background: #3763ff;
  border: white;
  margin: auto;
  cursor: pointer;
`;
export {
  SignInContainer,
  EccText,
  SignInInputAreaContainer,
  SignInInputArea,
  AutoLoginCotainer,
  AutoLogin,
  LoginButton,
};
