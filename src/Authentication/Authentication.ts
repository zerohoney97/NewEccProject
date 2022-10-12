import styled, { createGlobalStyle, css, keyframes } from "styled-components";

createGlobalStyle`
@font-face {
  font-family: "roboto";
  src: url("../Resource/font/Roboto-Black.ttf");
}
`;

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
const SignInInputArea = styled.textarea`
  width: 80%;
  margin: 10px;
`;
export { SignInContainer, EccText, SignInInputAreaContainer, SignInInputArea };
