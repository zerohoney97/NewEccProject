import { useState } from "react";
import { ReactComponent as EccLogo } from "../Resource/svg/EccLogo.svg";
import {
  SignInContainer,
  SignInInputAreaContainer,
  SignInInputArea,
  EccText
} from "./Authentication";

const SignIn = () => {
  return (
    <SignInContainer>
      <EccLogo style={{ margin: "auto" }} />
      <EccText>asd</EccText>
      <SignInInputAreaContainer>
        <SignInInputArea />
        <SignInInputArea />
      </SignInInputAreaContainer>
    </SignInContainer>
  );
};

export default SignIn;
