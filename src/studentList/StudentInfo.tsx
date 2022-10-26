import { useEffect, useRef, useState } from "react";
import NavBar from "../util/NavBar";
import { Link } from "react-router-dom";
import {
  StudentInfoContainer,
  StudentProfile,
  DivideLine,
  DropDown,
  DropDownContents,
  EvaluationList,
  PreEccEvaButton,
  PostEccEvaButton,
  MiddleContainer,
} from "./studentListStyleComponent";
import EccEvaluationTable from "./EccEvaluationTable";
import { ReactComponent as DropDownSVG } from "../Resource/svg/dropDown.svg";
import { ReactComponent as Camera } from "../Resource/svg/camera.svg";
import { ReactComponent as Sort } from "../Resource/svg/sort.svg";

const StudentInfo = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <NavBar />
      <StudentInfoContainer>
        <StudentProfile>
          <Camera />
        </StudentProfile>
        <h1 style={{ display: "inline-block" }}>김민아</h1>
        <span>3학년A반</span>
        <DivideLine />
        <MiddleContainer>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 24,
            }}
          >
            <div>
              총 <span style={{ color: "blue" }}>0</span>건
            </div>
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
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <span>
                카테고리
                <Sort />
              </span>
              <span>
                영역
                <Sort />
              </span>
              <span>
                검사날짜
                <Sort />
              </span>
            </div>

            <EccEvaluationTable>
              <Link to="/preTest">
                <PreEccEvaButton style={{ marginTop: 40 }}>
                  사전평가
                </PreEccEvaButton>
              </Link>
              <Link to="/postTest">
                <PostEccEvaButton>사후평가</PostEccEvaButton>
              </Link>
            </EccEvaluationTable>
          </EvaluationList>
        </MiddleContainer>
      </StudentInfoContainer>
    </>
  );
};
export default StudentInfo;
