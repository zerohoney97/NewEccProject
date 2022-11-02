import { useEffect, useRef, useState, useCallback } from "react";
import NavBar from "../util/NavBar";
import {
  PostTestContainer,
  ButtonContainer,
  BackButton,
  NextButton,
  DropDown,
  DropDownContentsBigCategory,
  DropDownContentsSmallCategory,
} from "./evaluationStyleComponent";
import { ReactComponent as DropDownSVG } from "../Resource/svg/dropDown.svg";
import { postTestResultType } from "../util/Type";
import PostTestTable from "./PostTestTable";
import axios from "axios";

const PostTest = () => {
  // 대영역
  const [bigToggle, setBigToggle] = useState<boolean>(false);
  const [bigCategoryName, setBigCategoryName] = useState<string>("대항목");
  // 소영역
  const [smallToggle, setSmallToggle] = useState<boolean>(false);
  const [smallCategoryNum, setSmallCategoryNum] = useState<number>(0);
  const [smallCategoryName, setSmallCategoryName] = useState<any>("소항목");

  const [tableData,setTableData]=useState<any>(null);
  const selectedBigCategory = useRef<any>();
  // 평가결과
  const [postTestResult, setPostTestResult] = useState<postTestResultType[]>([]);

  useEffect(() => {
    if (bigCategoryName !== "소항목" && smallCategoryName !== "소항목") {
      axios
        .get("/getEccList", {
          params: { data: bigCategoryName + "/" + smallCategoryName },
        })
        .then((res) => {
          console.log(res.data);
          setTableData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [smallCategoryName]);

  const setBigCategoryNameOnDropMenu = (
    categoryName: string,
    smallCategoryNum: number
  ) => {
    setBigCategoryName(categoryName);
    selectedBigCategory.current.innerHTML = categoryName;
    setSmallCategoryNum(smallCategoryNum);
  };

  const setSmallCategoryNameOnDropMenu = (e: any) => {
    if (((e.target as HTMLLIElement).textContent?.length as number) >= 15) {
      setSmallCategoryName((state: string) => {
        return "소항목";
      });
    } else {
      setSmallCategoryName((e.target as HTMLLIElement).textContent);
    }
  };

  const SmallCategory = useCallback(
    ({ smallCategory }: { smallCategory: number }) => {
      console.log(smallToggle);
      switch (smallCategory) {
        case 1:
          return (
            <DropDown
              onClick={() => {
                setSmallToggle(!smallToggle);
              }}
            >
              <span>{smallCategoryName}</span>
              <DropDownSVG />
              <DropDownContentsSmallCategory
                toggle={smallToggle}
                onClick={(e) => {
                  setSmallCategoryNameOnDropMenu(e);
                }}
              >
                <p>책마루</p>
                <p>OCR</p>
                <p>데이지플레이어</p>
                <p>독서확대기활용</p>
                <p>스마트기기활용</p>
                <p>스크린리더사용</p>
                <p>인터넷활용</p>
                <p>전자교재</p>
                <p>컴퓨터및프로그래밍운영</p>
                <p>한글및오피스활용</p>
                <p>한소네활용</p>
                <p>화면확대</p>
              </DropDownContentsSmallCategory>
            </DropDown>
          );
          break;
        case 2:
          return (
            <DropDown
              onClick={() => {
                setSmallToggle(!smallToggle);
              }}
            >
              <span>{smallCategoryName}</span>
              <DropDownSVG />
              <DropDownContentsSmallCategory
                toggle={smallToggle}
                onClick={(e) => {
                  setSmallCategoryNameOnDropMenu(e);
                }}
              >
                <p>보행체크리스트</p>
              </DropDownContentsSmallCategory>
            </DropDown>
          );
          break;
        case 3:
          return (
            <DropDown
              onClick={() => {
                setSmallToggle(!smallToggle);
              }}
            >
              <span>소항목</span>
              <DropDownSVG />
              <DropDownContentsSmallCategory toggle={smallToggle}>
                <p>업데이트 준비중입니다.</p>
              </DropDownContentsSmallCategory>
            </DropDown>
          );
          break;
        case 4:
          return (
            <DropDown
              onClick={() => {
                setSmallToggle(!smallToggle);
              }}
            >
              <span>{smallCategoryName}</span>
              <DropDownSVG />
              <DropDownContentsSmallCategory
                toggle={smallToggle}
                onClick={(e) => {
                  setSmallCategoryNameOnDropMenu(e);
                }}
              >
                <p>개인위생관리</p>
                <p>건강과안전</p>
                <p>시간관리</p>
                <p>식생활</p>
                <p>신변처리</p>
                <p>의생활</p>
                <p>자기주장및보호</p>
                <p>전화기술</p>
                <p>청소기술</p>
                <p>화폐활용</p>
              </DropDownContentsSmallCategory>
            </DropDown>
          );
          break;
        case 5:
          return (
            <DropDown
              onClick={() => {
                setSmallToggle(!smallToggle);
              }}
            >
              <span>{smallCategoryName}</span>
              <DropDownSVG />
              <DropDownContentsSmallCategory
                toggle={smallToggle}
                onClick={(e) => {
                  setSmallCategoryNameOnDropMenu(e);
                }}
              >
                <p>기호점자</p>
                <p>수학점자</p>
                <p>영어점자</p>
                <p>점자의기초</p>
                <p>촉각훈련</p>
                <p>한글점자</p>
              </DropDownContentsSmallCategory>
            </DropDown>
          );
          break;
      }
      return (
        //대영역이 빈상태에서 클릭시 아무 기능 없음
        <DropDown>
          <span>소항목</span>
        </DropDown>
      );
    },
    [smallToggle]
  );
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
        </div>{" "}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: 20,
          }}
        >
          <DropDown
            onClick={() => {
              setBigToggle(!bigToggle);
              setSmallCategoryName("소항목");
            }}
          >
            <span ref={selectedBigCategory}>대항목</span>
            <DropDownSVG />
            <DropDownContentsBigCategory toggle={bigToggle}>
              <p
                onClick={() => {
                  setBigCategoryNameOnDropMenu("보조공학", 1);
                }}
              >
                보조공학
              </p>

              <p
                onClick={() => {
                  setBigCategoryNameOnDropMenu("보행", 2);
                }}
              >
                보행
              </p>
              <p
                onClick={() => {
                  setBigCategoryNameOnDropMenu("사회적기술", 3);
                }}
              >
                사회적기술
              </p>
              <p
                onClick={() => {
                  setBigCategoryNameOnDropMenu("일상생활기술", 4);
                }}
              >
                일상생활기술
              </p>
              <p
                onClick={() => {
                  setBigCategoryNameOnDropMenu("점자", 5);
                }}
              >
                점자
              </p>
            </DropDownContentsBigCategory>
          </DropDown>
          <SmallCategory smallCategory={smallCategoryNum} />
        </div>
       {tableData !== null && <PostTestTable tableData={tableData} postTestResult={postTestResult} setPostTestResult={setPostTestResult}></PostTestTable>} 
        <ButtonContainer>
          <BackButton>이전으로</BackButton>
          <NextButton onClick={()=>{
            console.log(postTestResult);
          }}>평가완료</NextButton>
        </ButtonContainer>
      </PostTestContainer>
    </>
  );
};
export default PostTest;
