import { useEffect, useRef, useState } from "react";
import NavBar from "../util/NavBar";
import {
  PreTestContainer,
  ButtonContainer,
  BackButton,
  NextButton,
} from "./evaluationStyleComponent";
import PreTestTable from "./PreTestTable";

const PreTest = () => {
  return (
    <>
      <NavBar />
      <PreTestContainer>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1>사전평가</h1>
          <div style={{ alignSelf: "end" }}>
            <span style={{ color: "#999999" }}>반,이름:</span>
            <span style={{ fontWeight: "bold" }}> 3A김현아</span>
            <span style={{ color: "#999999" }}> 대문항:</span>
            <span style={{ fontWeight: "bold" }}> 보조공학</span>
            <span style={{ color: "#999999" }}> 소문항:</span>
            <span style={{ fontWeight: "bold" }}> 책마루</span>
          </div>
        </div>
          <PreTestTable></PreTestTable>
          <ButtonContainer>
            <BackButton>이전으로</BackButton>
            <NextButton>평가완료</NextButton>
          </ButtonContainer>
      </PreTestContainer>
    </>
  );
};
export default PreTest;
