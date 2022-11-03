import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import axios from "axios";

const StudentInfo = () => {
  const [toggle, setToggle] = useState(false);
  // 학생의 사전평가 기록
  const [studentPreEvaluationData, setStudentPreEvaluationData] = useState("");
//학생의 사후평가 기록
  const [studentPostEvaluationData, setStudentPostEvaluationData] =
    useState("");
    // 사전/사후평가를 바꾸는 트리거
    const [trigger,setTrigger]=useState<string>('pre');
  const studentInfo = useSelector((state: any) => {
    return state.studentInformation;
  });

  useEffect(() => {
    axios
      .get("/getStudentPreEvaluationData", {
        params: { studentData: studentInfo },
      })
      .then((res) => {
        setStudentPreEvaluationData(res.data);
      });

    axios
      .get("/getStudentPostEvaluationData", {
        params: { studentData: studentInfo },
      })
      .then((res) => {
        setStudentPostEvaluationData(res.data);
      });
  }, []);
  return (
    <>
      <NavBar />
      <StudentInfoContainer>
        <StudentProfile>
          <Camera />
        </StudentProfile>
        <h1 style={{ display: "inline-block" }}>{studentInfo.name}</h1>
        <span>{studentInfo.attrClass} 반</span>
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
              <span onClick={()=>{
                setTrigger('pre');
              }}>사전평가</span>
              <DropDownSVG />
              <DropDownContents toggle={toggle}>
                <p onClick={()=>{
                setTrigger('post');
              }}>사후평가</p>
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
            {studentPreEvaluationData !== "" &&
            studentPostEvaluationData !== "" ? (
              <EccEvaluationTable
                studentPreEvaluationData={studentPreEvaluationData}
                studentPostEvaluationData={studentPostEvaluationData}
                trigger={trigger}
                setTrigger={setTrigger}
              >
                <Link to="/preTest">
                  <PreEccEvaButton style={{ marginTop: 40 }}>
                    사전평가
                  </PreEccEvaButton>
                </Link>
                <Link to="/postTest">
                  <PostEccEvaButton>사후평가</PostEccEvaButton>
                </Link>
              </EccEvaluationTable>
            ) : null}
          </EvaluationList>
        </MiddleContainer>
      </StudentInfoContainer>
    </>
  );
};
export default StudentInfo;
