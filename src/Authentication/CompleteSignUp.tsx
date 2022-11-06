import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as EccLogo } from "../Resource/svg/EccLogo.svg";
import { ReactComponent as Complete } from "../Resource/svg/complete.svg";
import GlobalFont from "../Resource/font/fonts";
import {
  CompleteSignUpContainer,
  LoginButton,
} from "./AuthenticationStyleComponent";

const CompleteSignUp = ({isMobile}:{isMobile:any}) => {
  const [userName, setUserName] = useState<string>("홍길동");

  const EccText = styled.h3`
    font-family: "roboto";
    color: #3763ff;
    opacity: 0.4;
  `;
  return (
    <CompleteSignUpContainer>
      <EccLogo style={{ margin: "auto" }} />
      <GlobalFont />
      <EccText>EXPANDED CORE CURRICULUM</EccText>
      <Complete style={{ margin: "auto", width: "100" }} />
      <h1>회원가입이 완료되었습니다!</h1>
      <h3>{userName}선생님! 환영합니다!</h3>
      <LoginButton>로그인</LoginButton>
    </CompleteSignUpContainer>
  );
};

export default CompleteSignUp;
