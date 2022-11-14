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
import {
  getAuth,
  sendPasswordResetEmail,
} from "firebase/auth";
import { Auth } from "firebase-admin/lib/auth/auth";

const auth = getAuth();

const EccText = styled.h3`
  font-family: "roboto";
  color: #3763ff;
  opacity: 0.4;
`;

const FindUserPass = ({ isMobile }: { isMobile: boolean }) => {
  const check = useRef<HTMLInputElement>(null);
  const [isChecked, setIschecked] = useState<boolean>(false);
  const email = useRef<any>(null);

  // useEffect(() => {
  //   alert(`${isChecked === true ? "자동로그인 적용" : "자동로그인 해제"}`);
  // }, [isChecked]);
  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: "https://eccproject-72a55.firebaseapp.com/__/auth/action?mode=action&oobCode=code",
    // This must be true.
    handleCodeInApp: true,
    iOS: {
      bundleId: "com.example.ios",
    },
    android: {
      packageName: "com.example.android",
      installApp: true,
      minimumVersion: "12",
    },
    dynamicLinkDomain: "example.page.link",
  };
  return (
    <SignInContainer>
      <EccLogo style={{ margin: "auto" }} />
      <GlobalFont />
      <EccText>EXPANDED CORE CURRICULUM</EccText>
      <h1>비밀번호 찾기</h1>
      <SignInInputAreaContainer>
        <SignInInputArea ref={email} placeholder="이메일" type={"email"} />
      </SignInInputAreaContainer>
      <LoginButton
        style={{ marginTop: 30 }}
        onClick={() => {
          sendPasswordResetEmail(auth, email.current.value)
            .then((a) => {
              alert("이메일을 확인해 주세요!");
            })
            .catch((err) => {
              alert("등록되지 않은 이메일입니다.");
            });
        }}
      >
        비밀번호 찾기
      </LoginButton>
    </SignInContainer>
  );
};

export default FindUserPass;
