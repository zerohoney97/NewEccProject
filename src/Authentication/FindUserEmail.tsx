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
  FindedTeacherEmail,
} from "./AuthenticationStyleComponent";
import axios from "axios";
import { serverUrl } from "../util/globalVariants";
const EccText = styled.h3`
  font-family: "roboto";
  color: #3763ff;
  opacity: 0.4;
`;

const FindUserEmail = ({ isMobile }: { isMobile: boolean }) => {
  const [teacherEmail, setTeacherEmail] = useState<string>();
  const [toggle, setToggle] = useState<boolean>(false);
  const name = useRef<any>(null);
  const birth = useRef<any>(null);

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
        <SignInInputArea ref={name} placeholder="이름" />
        <SignInInputArea ref={birth} placeholder="생년월일" />
      </SignInInputAreaContainer>
      <LoginButton
        style={{ marginTop: 30 }}
        onClick={() => {
          axios
            .get(`/getTeacherEmail`, {
              params: {
                name: name.current.value,
                birth: birth.current.value,
              },
            })
            .then((res) => {
              setToggle(true);
              setTeacherEmail(res.data);
            });
        }}
      >
        이메일 찾기
      </LoginButton>
      <FindedTeacherEmail toggle={toggle}>
        <h2>선생님의 이메일은</h2>
        <div style={{ color: "#3763ff" }}>{teacherEmail}</div>
        <span>입니다!</span>
      </FindedTeacherEmail>
    </SignInContainer>
  );
};

export default FindUserEmail;
