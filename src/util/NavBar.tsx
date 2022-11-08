import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import {
  NavBarContainer,
  NavBarDivideLine,
  NavProfile,
  DropDownContents,
  SearchBar,
  SearchedStudentList,
} from "./utilStyledComponent";
import { Link } from "react-router-dom";
import { ReactComponent as EccLogo } from "../Resource/svg/EccLogo.svg";
import { ReactComponent as Magnify } from "../Resource/svg/ magnifyingGlass.svg";

const NavBar = ({
  isMobile,
  studentList,
  setStudentList,
  setTempStudentList,
  tempStudentList
}: {
  isMobile: boolean;
  studentList: string[];
  setStudentList: any;
  setTempStudentList:any;
  tempStudentList:string[];

}) => {
  // 검색된 학생을 담는 임시 리스트
  const [inputData, setInputData] = useState("");
  const dropDownContents = useRef<any>();
  const [toggle, setToggle] = useState<boolean>(false);
  //처음 마운트 될 때 임시 리스트에 저장하면 되므로 useEffect사용, 처음부터 정의를 하면 리랜더링마다 임시리스트가 초기화됨
 

  const handleChange = (e: any) => {
    setInputData(e.target.value);
    setToggle(true);
    if (Array.isArray(tempStudentList)) {
      studentList.forEach((a) => {
        if (a === e.target.value) {
          setTempStudentList(a);
          setToggle(true);
        }
      });
    }
  };
  const ValidateArray = () => {
    if (Array.isArray(tempStudentList)) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <>
      {isMobile ? (
        <>
          <NavBarContainer>
            <Link to="/studentList">
              <EccLogo style={{ width: 76, height: 30.74 }} />
            </Link>
            <SearchBar
              placeholder="검색할 학생의 이름을 입력하세요"
              style={{ paddingLeft: 10 }}
            ></SearchBar>
          </NavBarContainer>
          <NavBarDivideLine />
        </>
      ) : (
        <>
          <NavBarContainer>
            <Link to="/studentList">
              <EccLogo style={{ width: 76, height: 30.74 }} />
            </Link>
            <span style={{ display: "flex", marginLeft: 60 }}>
              <Magnify
                style={{
                  alignSelf: "center",
                  cursor: "pointer",
                  position: "relative",
                  right: -43,
                }}
              />
              <div style={{ position: "relative" }}>
                <SearchBar
                  placeholder="검색할 학생의 이름을 입력하세요"
                  style={{ paddingLeft: 40 }}
                  value={inputData}
                  onChange={handleChange}
                />
                <DropDownContents ref={dropDownContents} toggle={toggle}>
                  {ValidateArray() ? (
                    tempStudentList.map((a: any, i: number) => {
                      return <SearchedStudentList>{a}</SearchedStudentList>;
                    })
                  ) : (
                    <SearchedStudentList>{tempStudentList}</SearchedStudentList>
                  )}
                </DropDownContents>
              </div>
            </span>
            <span style={{ marginLeft: 60 }}>
              <span style={{ color: "#00CF15", fontSize: 18 }}>홍길동</span>
              <span style={{ fontSize: 18 }}>선생님! 환영합니다!</span>
            </span>
            <NavProfile />
          </NavBarContainer>
          <NavBarDivideLine />
        </>
      )}
    </>
  );
};

export default NavBar;
