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

const SignIn = () => {
  const check = useRef<HTMLInputElement>(null);
  const [isChecked, setIschecked] = useState(false);

  // useEffect(() => {
  //   alert(`${isChecked === true ? "자동로그인 적용" : "자동로그인 해제"}`);
  // }, [isChecked]);

  return (
    <SignInContainer>
      <EccLogo style={{ margin: "auto" }} />
      <GlobalFont />
      <EccText>EXPANDED CORE CURRICULUM</EccText>
      <SignInInputAreaContainer>
        <SignInInputArea />
        <SignInInputArea />
      </SignInInputAreaContainer>
      <AutoLoginCotainer>
        <AutoLogin
          ref={check}
          type={"checkbox"}
          onChange={() => {
            setIschecked((prev) => {
              return !prev;
            });
          }}
        />
        <label
          style={{ position: "absolute", left: "5rem", paddingTop: "0.4rem" }}
        >
          자동 로그인
        </label>
      </AutoLoginCotainer>
      <LoginButton>
        <span style={{'color':'white','fontSize':'x-large'}}>로그인</span>
      </LoginButton>
    </SignInContainer>
  );
};

export default SignIn;
