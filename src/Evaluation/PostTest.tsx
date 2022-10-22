import { useEffect, useRef, useState } from "react";
import NavBar from "../util/NavBar";
import {
  PostTestContainer,
  ButtonContainer,
  BackButton,
  NextButton,
} from "./evaluationStyleComponent";
import PostTestTable from "./PostTestTable";

const PostTest = () => {
  return (
    <>
      <NavBar />
      <PostTestContainer>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1>사후평가</h1>
          <div style={{ alignSelf: "end" }}>
            <span style={{ color: "#999999" }}>반,이름:</span>
            <span style={{ fontWeight: "bold" }}> 3A김현아</span>
            <span style={{ color: "#999999" }}> 대문항:</span>
            <span style={{ fontWeight: "bold" }}> 보조공학</span>
            <span style={{ color: "#999999" }}> 소문항:</span>
            <span style={{ fontWeight: "bold" }}> 책마루</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <span style={{ fontWeight: "bold" }}>문항</span>
          <div
            style={{
              width: "32%",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <span style={{ fontWeight: "bold" }}>1</span>
            <span style={{ fontWeight: "bold" }}>2</span>
            <span style={{ fontWeight: "bold" }}>3</span>
            <span style={{ fontWeight: "bold" }}>C</span>
          </div>
        </div>
        <PostTestTable></PostTestTable>
        <ButtonContainer>
          <BackButton>이전으로</BackButton>
          <NextButton>평가완료</NextButton>
        </ButtonContainer>
      </PostTestContainer>
    </>
  );
};
export default PostTest;
