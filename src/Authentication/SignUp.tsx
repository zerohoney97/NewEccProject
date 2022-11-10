import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as EccLogo } from "../Resource/svg/EccLogo.svg";
import GlobalFont from "../Resource/font/fonts";
import {
  SignUpContainer,
  SignUpInputAreaContainer,
  SignUpInputArea,
  SignUpButton,
  ValidateEmail,
  ValidatePassword,
  DuplicatePassword,
} from "./AuthenticationStyleComponent";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import axios from "axios";

const firebaseConfig = {
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
const auth = getAuth();

const SignUp = ({ isMobile }: { isMobile: boolean }) => {
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const passwordRegEx =
    /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

  const [emailToggle, setEmailToggle] = useState<boolean>(false);
  const [passWordToggle, setPassWordToggle] = useState<boolean>(false);
  const [duplicateToggle, setDuplicateToggle] = useState<boolean>(false);
  const [teacherNames, setTeacherNames] = useState<string[]>([]);
  const [emailAccess, setEmailAccess] = useState<boolean>(false);
  const [emailDuplicateAccess, setEmailDuplicateAccess] =
    useState<boolean>(false);
  const [passwordAccess, setPasswordAccess] = useState<boolean>(false);
  const [passwordDuplicateAccess, setpasswordDuplicateAccess] =
    useState<boolean>(false);

  const email = useRef<any>(null);
  const password = useRef<any>(null);
  const userName = useRef<any>(null);
  const birth = useRef<any>(null);

  useEffect(() => {
    axios.get("/getTeacher").then((res) => {
      setTeacherNames((state: string[]) => {
        return res.data.map((a: any) => {
          return a.name;
        });
      });
    });
  }, []);
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
    cursor:'pointer'
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
        <SignUpInputArea ref={userName} placeholder="이름을 입력해 주세요" />
        <SignUpInputArea
          ref={birth}
          placeholder="생년원일 6자리를 입력해주세요 ex)001122"
        />
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
            ref={email}
            onChange={(e) => {
              if (e.target.value.match(emailRegEx) === null) {
                setEmailToggle(true);
                setEmailAccess(false);
                setEmailDuplicateAccess(false);


              } else {
                setEmailToggle(false);
                setEmailAccess(true);
              }
            }}
          />
          <button
            style={btnStyle}

            onClick={() => {
              if (teacherNames.includes(email.current.value)) {
                alert("중복된 이메일입니다.");
                setEmailDuplicateAccess(false);

              } else {
                alert('사용 가능한 이메일 입니다!');
                setEmailDuplicateAccess(true);
              }
            }}
          >
            중복확인
          </button>
        </div>
        <ValidateEmail emailToggle={emailToggle}>
          이메일 형식에 맞춰 주세요 ㅠㅠ
        </ValidateEmail>
        <SignUpInputArea
          placeholder="특수문자/문자/숫자 포함 8~15자리 이내"
          type={"password"}
          ref={password}
          onChange={(e) => {
            if (e.target.value.match(passwordRegEx) === null) {
              setPassWordToggle(true);
              setPasswordAccess(false);

            } else {
              setPassWordToggle(false);
              setPasswordAccess(true);
            }
          }}
        />
        <ValidatePassword passwordToggle={passWordToggle}>
          특수문자/문자/숫자 포함 8~15자리 이내로 입력해주세요 ㅠㅠ
        </ValidatePassword>
        <SignUpInputArea
          placeholder="비밀번호를 다시 입력해주세요"
          type={"password"}
          onChange={(e) => {
            console.log(password.current?.value);
            if (e.target.value !== password.current?.value) {
              setDuplicateToggle(true);
              setpasswordDuplicateAccess(false);

            } else {
              setDuplicateToggle(false);
              setpasswordDuplicateAccess(true);
            }
          }}
        />
        <DuplicatePassword duplicateToggle={duplicateToggle}>
          비밀번호가 일치하지 않습니다.
        </DuplicatePassword>
      </SignUpInputAreaContainer>
      <SignUpButton
        onClick={() => {
          if (
            userName.current.value !== '' &&
            email.current.value !== '' &&
            birth.current.value!==''&&
            password.current.value !== '' &&
            emailAccess &&
            passwordAccess &&
            emailDuplicateAccess &&
            passwordDuplicateAccess
          ) {
            console.log('뚫림!');
            // createUserWithEmailAndPassword(
            //   auth,
            //   email.current.value,
            //   password.current.value
            // )
            //   .then((userCredential) => {
            //     window.location.href='/studentList';
            //     const user = userCredential.user;
            //   })
            //   .catch((error) => {
            //     const errorCode = error.code;
            //     const errorMessage = error.message;
            //   });
          } else {
            if (!emailAccess) {
              alert("이메일 형식을 맞춰주세요");
            } else if (!passwordAccess) {
              alert("비밀번호가 형식을 맞춰주세요");
            } else if (!emailDuplicateAccess) {
              alert("이메일 중복을 확인해주세요");
            } else if (!passwordDuplicateAccess) {
              alert("비밀번호 중복을 확인해주세요");
            } else {
              alert("필수정보를 입력해주세요");
            }
          }
        }}
      >
        회원가입
      </SignUpButton>
    </SignUpContainer>
  );
};

export default SignUp;
