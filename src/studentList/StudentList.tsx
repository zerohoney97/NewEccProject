import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as EccLogo } from "../Resource/svg/EccLogo.svg";
import { ReactComponent as Magnify } from "../Resource/svg/ magnifyingGlass.svg";
import { NavBar, SearchBar } from "./studentListStyleComponent";
import GlobalFont from "../Resource/font/fonts";

const StudentList = () => {
  return (
    <NavBar>
      <EccLogo width={100} />
      <SearchBar>
        <Magnify />
      </SearchBar>
      <h3 style={{'color':'#00CF15'}}>홍길동 선생님</h3><h3>환영합니다!</h3>
    </NavBar>
  );
};

export default StudentList;
