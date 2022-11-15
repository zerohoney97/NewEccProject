import styled from "styled-components";

// SingIn

// 로그인 페이지 전체 컴포넌트를 감싸는 컨테이너
const SignInContainer = styled.div`
  margin: auto;
  margin-top: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 30%;
  @media screen and (max-width: 768px) {
    margin: auto;
    margin-top: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 80%;
  }
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
  border: #e5e5e5 solid 1px;
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
  border-radius: 5px;
  color: white;
  font-size: x-large;
  margin: auto;
  cursor: pointer;
`;

const GotoSignUpButton = styled.button`
  width: 80%;
  height: 40px;
  background: #3763ff;
  border: white;
  border-radius: 5px;
  color: white;
  font-size: x-large;
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
  GotoSignUpButton,
};

// SingIn
// ----------------------------------------------------------------------------------------------------------------

// SingUp

//회원가입 전체를 감사는 컨테이너
const SignUpContainer = styled.div`
  margin: auto;
  margin-top: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 30%;
  @media screen and (max-width: 768px) {
    margin: auto;
    margin-top: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

// 회원가입 정보를 기입하는 inputarea를 감싸는 컨테이너
const SignUpInputAreaContainer = styled.div`
  margin-top: 20px;
  position: relative;

  & h4 {
    color: red;
    margin: -10px;
  }
`;
// 회원가입 정보를 입력하는 input
const SignUpInputArea = styled.input`
  width: 80%;
  padding: 10px;
  border: #e5e5e5 solid 1px;
  font-size: 15px;
  &::placeholder {
    text-align: center;
  }

  & {
    margin: 20px;
  }
`;

// 회원가입 버튼
const SignUpButton = styled.button`
  width: 86%;
  height: 40px;
  background: #3763ff;
  border: white;
  border-radius: 5px;

  margin: auto;
  margin-top: 2rem;
  color: white;
  cursor: pointer;
`;

const ValidateBirth = styled.h4<{ birthToggle: boolean }>`
  display: ${(props) => {
    return props.birthToggle ? "block" : "none";
  }};
`;
const ValidateEmail = styled.h4<{ emailToggle: boolean }>`
  display: ${(props) => {
    return props.emailToggle ? "block" : "none";
  }};
`;
const ValidatePassword = styled.h4<{ passwordToggle: boolean }>`
  display: ${(props) => {
    return props.passwordToggle ? "block" : "none";
  }};
`;
const DuplicatePassword = styled.h4<{ duplicateToggle: boolean }>`
  display: ${(props) => {
    return props.duplicateToggle ? "block" : "none";
  }};
`;

export {
  SignUpContainer,
  SignUpInputAreaContainer,
  SignUpInputArea,
  SignUpButton,
  ValidateEmail,
  ValidatePassword,
  DuplicatePassword,
  ValidateBirth
};
// SingUp

// ------------------------------------------------------------------------------------

// AddProfile

// 프로필 추가 전체를 감싸는 컨테이너
const AddProfileContainer = styled.div`
  margin: auto;
  margin-top: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 30vw;
`;
// 건너뛰기 버튼
const SkipButton = styled.button`
  width: 86%;
  height: 40px;
  background: #3763ff;
  border: white;
  border-radius: 5px;
  margin: auto;
  margin-top: 2rem;
  color: white;
  cursor: pointer;
`;

export { AddProfileContainer, SkipButton };
// AddProfile
// ------------------------------------------------------------------------------------
// CompleteSignUp

// 회원가입 완료 페이지를 감싸는 컨테이너
const CompleteSignUpContainer = styled.div`
  margin: auto;
  margin-top: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 30vw;
`;

export { CompleteSignUpContainer };

// findEmail
const FindedTeacherEmail = styled.div<{ toggle: boolean }>`
  display: ${(props) => {
    return props.toggle ? "block" : "none";
  }};
`;

export { FindedTeacherEmail };
