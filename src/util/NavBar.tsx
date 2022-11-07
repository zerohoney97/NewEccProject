import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { ReactComponent as EccLogo } from "../Resource/svg/EccLogo.svg";
import { ReactComponent as Magnify } from "../Resource/svg/ magnifyingGlass.svg";

const NavBar = ({
  isMobile,
  studentList,
}: {
  isMobile: boolean;
  studentList: any;
}) => {
  let toggle = false;
  const [inputData, setInputData] = useState<string>();
  const NavBar = styled.div`
    margin: auto;
    width: 1200px;
    height: 110px;
    align-items: center;
    display: flex;
    @media screen and (max-width: 768px) {
      width: 100%;
      height: 50%;
      align-items: center;
      display: flex;
      justify-content: space-evenly;
    }
  `;

  const NavBarDivideLine = styled.div`
    width: 100%;
    border-bottom: 1px solid #3763ff;
  `;

  // 검색창
  const SearchBar = styled.input`
    width: 700px;
    height: 54px;
    border-radius: 30px;
    background: #f5f5f5;
    border: silver;
    position: relative;
    @media screen and (max-width: 768px) {
      width: 60%;
      height: 100%;
      border-radius: 30px;
      background: #f5f5f5;
      border: silver;
    }
    &::placeholder {
      color: #999999;
    }
  `;
  // 네비게이션 끝에있는 프로필 사진
  const NavProfile = styled.div`
    margin: auto;
    width: 46px;
    height: 46px;
    border-radius: 30px;
    background: #d9d9d9;
  `;

  return (
    <>
      {isMobile ? (
        <>
          <NavBar>
            <Link to="/studentList">
              <EccLogo style={{ width: 76, height: 30.74 }} />
            </Link>
            <SearchBar
              placeholder="검색할 학생의 이름을 입력하세요"
              style={{ paddingLeft: 10 }}
            ></SearchBar>
          </NavBar>
          <NavBarDivideLine />
        </>
      ) : (
        <>
          <NavBar>
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
                  onClick={(e) => {
                    toggle = true;
                  }}
                />
                <DropDownContents toggle={toggle}>
                  <p>학생</p>
                </DropDownContents>
              </div>
            </span>
            <span style={{ marginLeft: 60 }}>
              <span style={{ color: "#00CF15", fontSize: 18 }}>홍길동</span>
              <span style={{ fontSize: 18 }}>선생님! 환영합니다!</span>
            </span>
            <NavProfile />
          </NavBar>
          <NavBarDivideLine />
        </>
      )}
    </>
  );
};
const DropDownContents = ({
  toggle,
  children,
}: {
  toggle: boolean;
  children: any;
}) => {
  const Content = styled.div<{ toggle: boolean }>`
    display: ${(props) => (props.toggle ? "blodk" : "none")};
    position: absolute;
    background: #f5f5f5;
    min-width: 10%;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    left: 5%;
    border-radius: 10px;
    z-index: 1;
  `;
  return (
    <>
      <Content toggle={toggle}> {children}</Content>
    </>
  );
};
export default NavBar;
