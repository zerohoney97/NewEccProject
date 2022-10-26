import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as EccLogo } from "../Resource/svg/EccLogo.svg";
import { ReactComponent as Magnify } from "../Resource/svg/ magnifyingGlass.svg";

const NavBar = () => {
  const NavBar = styled.div`
    margin: auto;
    width: 1200px;
    height: 110px;
    align-items: center;
    display: flex;
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
          <SearchBar
            placeholder="검색할 학생의 이름을 입력하세요"
            style={{ paddingLeft: 40 }}
          />
        </span>
        <span style={{ marginLeft: 60 }}>
          <span style={{ color: "#00CF15", fontSize: 18 }}>홍길동</span>
          <span style={{ fontSize: 18 }}>선생님! 환영합니다!</span>
        </span>
        <NavProfile />
      </NavBar>
      <NavBarDivideLine />
    </>
  );
};

export default NavBar;
