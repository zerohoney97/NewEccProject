import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as EccLogo } from "../Resource/svg/EccLogo.svg";
import { ReactComponent as EmptyProfile } from "../Resource/svg/emptyProfile.svg";
import GlobalFont from "../Resource/font/fonts";
import { AddProfileContainer,SkipButton } from "./AuthenticationStyleComponent";
const AddProfile = () => {
   const EccText = styled.h3`
    font-family: "roboto";
    color: #3763ff;
    opacity: 0.4;
  `;
  return (
    <AddProfileContainer>
      <EccLogo style={{ margin: "auto" }} />
      <GlobalFont />
      <EccText>EXPANDED CORE CURRICULUM</EccText>
      <h1>사진등록</h1>
      <h4 style={{ color: "#999999" }}>고객님의 프로필 사진을 등록해주세요</h4>
      <EmptyProfile style={{ margin: "auto" }} />
      <div style={{ 'margin': 10,'fontWeight':'bold' }}>사진변경</div>
      <SkipButton>건너뛰기</SkipButton>
    </AddProfileContainer>
  );
};

export default AddProfile;
