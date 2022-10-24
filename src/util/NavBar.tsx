import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as EccLogo } from "../Resource/svg/EccLogo.svg";
import { ReactComponent as Magnify } from "../Resource/svg/ magnifyingGlass.svg";

const NavBar = () => {
  const NavBar = styled.div`
    height: 60px;
    border-bottom: 1px solid #3763ff;
    align-items: center;
    justify-content: space-evenly;
    display: flex;
  `;

  // 검색창
  const SearchBar = styled.input`
    width: 100%;
    height: 2rem;
    border-radius: 10px;
    background: #f5f5f5;
    border: silver;

    &::placeholder {
      color: #999999;
    }
  `;
  // 네비게이션 끝에있는 프로필 사진
  const NavProfile = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 30px;
    background: #d9d9d9;
  `;

  return (
    <NavBar>
      <Link to='/studentList' style={{ position: "relative", left: "-5%" }}>
        <EccLogo width={100}  />
      </Link>
      <span style={{ width: "40%", display: "flex" }}>
        <SearchBar
          placeholder="검색할 학생의 이름을 입력하세요"
          style={{ paddingLeft: 30 }}
        />
        <Magnify style={{ alignSelf: "center", cursor: "pointer" }} />
      </span>
      <span style={{ display: "flex" }}>
        <h3 style={{ color: "#00CF15", marginLeft: 30 }}>홍길동</h3>
        <h3>선생님! 환영합니다!</h3>
      </span>
      <NavProfile />
    </NavBar>
  );
};

export default NavBar;
