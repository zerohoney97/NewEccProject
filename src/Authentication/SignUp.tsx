import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as EccLogo } from "../Resource/svg/EccLogo.svg";
import GlobalFont from "../Resource/font/fonts";
import {
  SignUpContainer,
  SignUpInputAreaContainer,
  SignUpInputArea,
  SignUpButton,
} from "./AuthenticationStyleComponent";

const SignUp = () => {
  interface btn {
    width: string;
    height: string;
    position: string;
    left: string;
    border: string;
    background: string;
  }
  const btnStyle = {
    width: "20%",
    height: "2.5rem",
    position: "relative",
    left: "-5%",
    border: "#e5e5e5",
    background: "#999999",
    color: "white",
  } as React.CSSProperties;

  const EccText = styled.h3`
    font-family: "roboto";
    color: #3763ff;
    opacity: 0.4;
  `;
  return (
    <SignUpContainer>
      <EccLogo style={{ margin: "auto" }} />
      <GlobalFont />
      <EccText>EXPANDED CORE CURRICULUM</EccText>
      <h1>회원정보 입력</h1>
      <SignUpInputAreaContainer>
        <SignUpInputArea placeholder="이름을 입력해 주세요" />
        <h4>한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)</h4>
        <SignUpInputArea placeholder="생년원일 6자리를 입력해주세요 ex)001122" />
        <h4>한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)</h4>{" "}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "95%",
            margin: "auto",
          }}
        >
          <SignUpInputArea
            style={{ width: "90%" }}
            placeholder="이메일을 입력해주세요"
          />
          <button style={btnStyle}>중복확인</button>
        </div>
        <h4>한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)</h4>
        <SignUpInputArea placeholder="비밀번호(영문/숫자/특수문자 조합 8~20자)" />
        <h4>8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.</h4>
        <SignUpInputArea placeholder="비밀번호를 다시 입력해주세요" />
        <h4>비밀번호가 일치하지 않습니다.</h4>
      </SignUpInputAreaContainer>
      <SignUpButton>회원가입</SignUpButton>
    </SignUpContainer>
  );
};

export default SignUp;
