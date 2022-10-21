import { useEffect, useRef, useState } from "react";
import NavBar from "../util/NavBar";
import {
  StudentInfoContainer,
  StudentProfile,
  DivideLine,
  DropDown,
  DropDownContents,
  EvaluationList,
  PreEccEvaButton,
  PostEccEvaButton,
} from "./studentListStyleComponent";
import EccEvaluationTable from "./EccEvaluationTable";
import { ReactComponent as DropDownSVG } from "../Resource/svg/dropDown.svg";
const StudentInfo = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <NavBar />
      <StudentInfoContainer>
        <StudentProfile />
        <h1 style={{ display: "inline-block" }}>김민아</h1>
        <span>3학년A반</span>
        <DivideLine />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>총 0건</div>
          <DropDown
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <span>사전평가</span>
            <DropDownSVG />
            <DropDownContents toggle={toggle}>
              <p>사후평가</p>
            </DropDownContents>
          </DropDown>
        </div>
        <EvaluationList>
          <EccEvaluationTable>
            <PreEccEvaButton>사전평가</PreEccEvaButton>
            <PostEccEvaButton>사후평가</PostEccEvaButton>
          </EccEvaluationTable>
        </EvaluationList>
      </StudentInfoContainer>
    </>
  );
};
export default StudentInfo;
