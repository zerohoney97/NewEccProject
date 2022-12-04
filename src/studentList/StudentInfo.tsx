import { useCallback, useEffect, useRef, useState } from "react";
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
  Content,
} from "./studentListStyleComponent";
import { preTestResult, postTestResult } from "../util/Type";
import EccEvaluationTable from "./EccEvaluationTable";
import { ReactComponent as DropDownSVG } from "../Resource/svg/dropDown.svg";
import { ReactComponent as Camera } from "../Resource/svg/camera.svg";
import { ReactComponent as Sort } from "../Resource/svg/sort.svg";
import axios from "axios";
import { serverUrl } from "../util/globalVariants";

const StudentInfo = ({ isMobile }: { isMobile: boolean }) => {
  // 데이터를 불러오는 상태인지 확인하기 위한 state
  const [isLoading, setIsLoadong] = useState<boolean>(true);
  const [toggle, setToggle] = useState(false);
  // 학생의 사전평가 기록
  const [studentPreEvaluationData, setStudentPreEvaluationData] = useState<
    preTestResult[] | null
  >(null);
  //학생의 사후평가 기록
  const [studentPostEvaluationData, setStudentPostEvaluationData] = useState<
    postTestResult[] | null
  >(null);
  let tempArray: preTestResult[];
  // 사전/사후평가를 바꾸는 트리거
  const [trigger, setTrigger] = useState<string>("사전평가");
  const container = useRef<any>(null);
  const studentInfo = useSelector((state: any) => {
    return state.studentInformation;
  });

  // 빈공간 클릭시 닫기(middlecontainer 에 ref로 접근하고 이 안에 내가 클릭한 타겟이 있는지 유무를 따져 토글을 닫아버림)
  const closeDropDown: any = useCallback(
    (e: any) => {
      if (!container.current.contains(e.target)) {
        setToggle((state) => false);
      }
    },
    [toggle]
  );

  // 동기적으로 사전평가 불러오기
  const getStudentPreEvaluationData = async () => {
    return new Promise<void>((resolve) => {
      axios
        .get(`/getStudentPreEvaluationData`, {
          params: { studentData: studentInfo },
        })
        .then((res) => {
          setStudentPreEvaluationData(res.data);
          resolve();
        });
    });
  };
  // 동기적으로 사후평가 불러오기
  const getStudentPostEvaluationData = () => {
    return new Promise<void>((resolve) => {
      axios
        .get(`/getStudentPostEvaluationData`, {
          params: { studentData: studentInfo },
        })
        .then((res) => {
          setStudentPostEvaluationData(res.data);
          setIsLoadong(false);
          resolve();
        });
    });
  };

  //ecc data를 동기적으로 할당하는 함수
  const setEccResultData = async () => {
    await getStudentPreEvaluationData();
    await getStudentPostEvaluationData();
  };
  // [
  //   {date:"2022-10-30"},
  //   {date:"1999-10-30"},
  //   {date:"2005-12-03"},
  //   {date:"2005-12-30"},
  // ]
  // 시간순으로 정리하는 함수
  const sortByRecentDate = useCallback(
    async (preResult: preTestResult[], postResult: preTestResult[]) => {
      console.log(toggle);
      return new Promise<any>((resolve) => {
        if (trigger === "사전평가") {
          tempArray = preResult.sort((a: preTestResult, b: preTestResult) => {
            return new Date(b.date).valueOf() - new Date(a.date).valueOf();
          });
          resolve(tempArray);
        } else {
          tempArray = postResult.sort((a: preTestResult, b: preTestResult) => {
            return new Date(b.date).valueOf() - new Date(a.date).valueOf();
          });
          resolve(tempArray);
        }
      });
    },
    [trigger]
  );

  const setSortedData = async () => {
    const newArray: preTestResult[] = await sortByRecentDate(
      studentPreEvaluationData as preTestResult[],
      studentPostEvaluationData as preTestResult[]
    );
    setStudentPreEvaluationData([...newArray]);
  };
  useEffect(() => {
    window.addEventListener("click", closeDropDown);
    setEccResultData();

    return () => {
      window.removeEventListener("click", closeDropDown);
    };
    // 같은 페이지에서 uid값만 바뀌므로 studentInfo로 변화 감지하여 데이터를 새로 불러온다.
  }, [studentInfo]);
  return (
    <>
      {isMobile ? (
        <StudentInfoContainer>
          <StudentProfile>
            <Camera />
          </StudentProfile>
          <h1 style={{ display: "inline-block" }}>{studentInfo.name}</h1>
          <span>{studentInfo.attrClass} 반</span>
          <DivideLine />
          <MiddleContainer ref={container}>
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
                <DropDownSVG />
                <DropDownContents toggle={toggle}>
                  <Content
                    onClick={() => {
                      setTrigger("사전평가");
                    }}
                  >
                    사전평가
                  </Content>
                  <Content
                    onClick={() => {
                      setTrigger("사후평가");
                    }}
                  >
                    사후평가
                  </Content>
                </DropDownContents>
              </DropDown>
            </div>
            <EvaluationList>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <span>
                  카테고리
                </span>
                <span>
                  영역
                </span>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setSortedData();
                  }}
                >
                  검사날짜
                  <Sort />
                </span>
              </div>
              {!isLoading ? (
                <EccEvaluationTable
                  isMobile={isMobile}
                  studentInfo={studentInfo}
                  studentPreEvaluationData={studentPreEvaluationData}
                  studentPostEvaluationData={studentPostEvaluationData}
                  isLoading={isLoading}
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
              ) : (
                <h2>데이터를 불러오고 있습니다..</h2>
              )}
            </EvaluationList>
          </MiddleContainer>
        </StudentInfoContainer>
      ) : (
        <StudentInfoContainer>
          <StudentProfile>
            <Camera />
          </StudentProfile>
          <h1 style={{ display: "inline-block" }}>{studentInfo.name}</h1>
          <span>{studentInfo.attrClass} 반</span>
          <DivideLine />
          <MiddleContainer ref={container}>
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
                {trigger}
                <DropDownSVG />
                <DropDownContents toggle={toggle}>
                  <Content
                    onClick={() => {
                      setTrigger("사전평가");
                    }}
                  >
                    사전평가
                  </Content>
                  <Content
                    onClick={() => {
                      setTrigger("사후평가");
                    }}
                  >
                    사후평가
                  </Content>
                </DropDownContents>
              </DropDown>
            </div>
            <EvaluationList>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <span>
                  카테고리
                </span>
                <span>
                  영역
                </span>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setSortedData();
                  }}
                >
                  검사날짜
                  <Sort />
                </span>
              </div>
              {!isLoading ? (
                <EccEvaluationTable
                  studentInfo={studentInfo}
                  studentPreEvaluationData={studentPreEvaluationData}
                  studentPostEvaluationData={studentPostEvaluationData}
                  trigger={trigger}
                  isLoading={isLoading}
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
              ) : (
                <h2>데이터를 불러오고 있습니다..</h2>
              )}
            </EvaluationList>
          </MiddleContainer>
        </StudentInfoContainer>
      )}
    </>
  );
};
export default StudentInfo;
