import { useEffect, useRef, useState } from "react";
import {
  StudentListContainer,
  MoreButton
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
      <MoreButton>더보기</MoreButton>

    </>
  );
};

export default StudentList;
