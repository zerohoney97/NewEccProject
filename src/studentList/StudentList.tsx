import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as EccLogo } from "../Resource/svg/EccLogo.svg";
import { ReactComponent as Magnify } from "../Resource/svg/ magnifyingGlass.svg";
import {
  StudentListContainer,
} from "./studentListStyleComponent";
import Table from "./StudentTable";
import NavBar from "../util/NavBar";
const StudentList = () => {
  return (
    <>
      <NavBar />
      <StudentListContainer>
        <h1 style={{ textAlign: "initial" }}>학생리스트</h1>
        <Table />
      </StudentListContainer>
    </>
  );
};

export default StudentList;
