import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as EccLogo } from "../Resource/svg/EccLogo.svg";
import GlobalFont from "../Resource/font/fonts";
import {
  SignInContainer,
  SignInInputAreaContainer,
  SignInInputArea,
  AutoLogin,
  AutoLoginCotainer,
  LoginButton,
} from "./AuthenticationStyleComponent";
const EccText = styled.h3`
  font-family: "roboto";
  color: #3763ff;
  opacity: 0.4;
`;

const FindUserEmail = ({isMobile}:{isMobile:boolean}) => {
  const check = useRef<HTMLInputElement>(null);
  const [isChecked, setIschecked] = useState<boolean>(false);

  // useEffect(() => {
  //   alert(`${isChecked === true ? "자동로그인 적용" : "자동로그인 해제"}`);
  // }, [isChecked]);

  return (
    <SignInContainer>
      <EccLogo style={{ margin: "auto" }} />
      <GlobalFont />
      <EccText>EXPANDED CORE CURRICULUM</EccText>
      <h1>이메일 찾기</h1>
      <SignInInputAreaContainer>
        <SignInInputArea placeholder="이름" />
        <SignInInputArea placeholder="생년월일" />
      </SignInInputAreaContainer>
      <LoginButton style={{'marginTop':30}}>이메일 찾기</LoginButton>
    </SignInContainer>
  );
};

export default FindUserEmail;
