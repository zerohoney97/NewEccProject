import { useEffect, useRef, useState } from "react";
import { StudentListContainer, MoreButton } from "./studentListStyleComponent";
import { studentList } from "../util/Type";
import Table from "./StudentTable";
import NavBar from "../util/NavBar";
import axios from "axios";
import { useSelector } from "react-redux";
const StudentList = () => {
  
  const [studentList, setStudentList] = useState<studentList | null>(null);
  const teacherInfo = useSelector((state: any) => {
    return state.teacherInfo;
  });
  console.log(teacherInfo.uid);
  useEffect(() => {
    axios
      .get("/getStudentInformationByTeacher", {
        params: { data: teacherInfo.uid },
      })
      .then((result) => {
        setStudentList(result.data);
        console.log(result.data);
      });
  }, []);

  return (
    <>
      <NavBar />
      <StudentListContainer>
        <h1 style={{ textAlign: "initial" }}>학생리스트</h1>
        {studentList !== null && <Table {...studentList}/>}
      </StudentListContainer>
      <MoreButton>더보기</MoreButton>
    </>
  );
};

export default StudentList;
