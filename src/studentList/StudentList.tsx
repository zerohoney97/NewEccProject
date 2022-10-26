import { useEffect, useRef, useState } from "react";
import { StudentListContainer, MoreButton } from "./studentListStyleComponent";
import { studentList } from "../util/Type";
import Table from "./StudentTable";
import NavBar from "../util/NavBar";
import axios from "axios";
import { useSelector } from "react-redux";
const StudentList = () => {
  const [studentList, setStudentList] = useState<studentList[]>([{
    name:'이름',
    attrClass:'반',
    birth:'생년월일',
    recent:'평가날짜',
    gender:'성별',
  }]);
  const teacherInfo = useSelector((state: any) => {
    return state.teacherInfo;
  });
  useEffect(() => {
    axios
      .get("/getStudentInformationByTeacher", {
        params: { data: teacherInfo.uid },
      })
      .then((result) => {
        const temp=studentList.concat(result.data);
        setStudentList(temp);
      });
  }, []);

  return (
    <>
      <NavBar />
      <StudentListContainer>
        <h1 style={{ textAlign: "initial" ,marginBottom:-10,marginTop:113}}>학생리스트</h1>
        {studentList !== null && <Table studentList={studentList} />}
      </StudentListContainer>
      <MoreButton>더보기</MoreButton>
    </>
  );
};

export default StudentList;
