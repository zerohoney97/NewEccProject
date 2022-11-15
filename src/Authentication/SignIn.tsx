import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as EccLogo } from "../Resource/svg/EccLogo.svg";
import GlobalFont from "../Resource/font/fonts";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setTeacherUidAndName } from "../redux/slice/userReducer";
import {
  SignInContainer,
  SignInInputAreaContainer,
  SignInInputArea,
  AutoLogin,
  AutoLoginCotainer,
  LoginButton,
  GotoSignUpButton,
} from "./AuthenticationStyleComponent";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
const EccText = styled.h3`
  font-family: "roboto";
  color: #3763ff;
  opacity: 0.4;
`;
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};
const app = initializeApp(firebaseConfig);

// 파이어베이스 권한 초기화
const auth = getAuth();
// 파이어베이스를 활용한 회원인증(로그인)

const SignIn = ({ isMobile }: { isMobile: boolean }) => {
  let dispatch = useDispatch();

  const check = useRef<HTMLInputElement>(null);
  const [isChecked, setIschecked] = useState<boolean>(false);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const signIn = (auth: any, email: any, password: any) => {
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        axios
          .get("/getTeacherInformation", {
            params: { uid: userCredential.user.uid },
          })
          .then((result: any) => {
            const information = {
              uid: userCredential.user.uid,
              name: result.data.name,
            };
            dispatch(setTeacherUidAndName(information));
            navigate("/studentList");
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
        const errorMessage = error.message;
      });
  };
  // useEffect(() => {
  //   alert(`${isChecked === true ? "자동로그인 적용" : "자동로그인 해제"}`);
  // }, [isChecked]);

  return (
    <SignInContainer>
      <EccLogo style={{ margin: "auto" }} />
      <GlobalFont />
      <EccText>EXPANDED CORE CURRICULUM</EccText>
      <SignInInputAreaContainer>
        <SignInInputArea ref={email} placeholder="이메일" type={"email"} />
        <SignInInputArea
          ref={password}
          placeholder="비밀번호"
          type={"password"}
        />
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
      <LoginButton
        onClick={() => {
          signIn(auth, email.current, password.current);
        }}
      >
        로그인
      </LoginButton>
      <Link to={"/signUp"} style={{ marginTop: 20 }}>
        <GotoSignUpButton>회원가입</GotoSignUpButton>
      </Link>
    </SignInContainer>
  );
};

export default SignIn;
