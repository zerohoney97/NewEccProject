import { useEffect, useRef, useState } from "react";
import {
  StudentListContainer,
  MoreButton,
  StudentTableHead,
  AddStudentBtn,
} from "./studentListStyleComponent";
import { Link } from "react-router-dom";
import { studentList } from "../util/Type";
import Table from "./StudentTable";
import NavBar from "../util/NavBar";
import axios from "axios";
import { ReactComponent as Sort } from "../Resource/svg/sort.svg";
import { useSelector } from "react-redux";
const StudentList = ({ isMobile }: { isMobile: boolean }) => {
  const [studentList, setStudentList] = useState<studentList[]>([]);
  const teacherInfo = useSelector((state: any) => {
    return state.teacherInfo;
  });
  
  useEffect(() => {
    axios
      .get("/getStudentInformationByTeacher", {
        params: { data: teacherInfo.uid },
      })
      .then((result) => {
        const temp = studentList.concat(result.data);
        setStudentList(temp);
      });
  }, []);
  return (
    <>
      {isMobile ? (
        <div>
          <StudentListContainer>
            <h1
              style={{
                textAlign: "initial",
                marginBottom: -10,
                marginTop: 113,
              }}
            >
              학생리스트
            </h1>
            <StudentTableHead>
              <span>
                이름
                <Sort />
              </span>
              <span>생년월일</span>
              <span>
                평가날짜
                <Sort />
              </span>
              <div style={{ width: 30 }}></div>
            </StudentTableHead>
            {studentList !== null && (
              <Table isMobile={isMobile} studentList={studentList} />
            )}
          </StudentListContainer>
          <MoreButton>더보기</MoreButton>
        </div>
      ) : (
        <div>
          <StudentListContainer>
            <div style={{ display: "flex" ,justifyContent:'space-between',alignItems:'end'}}>
              <h1
                style={{
                  textAlign: "initial",
                  marginBottom: -10,
                  marginTop: 113,
                }}
              >
                학생리스트
              </h1>
             <Link to={`/addStudent/${teacherInfo.uid}`}><AddStudentBtn>학생추가</AddStudentBtn></Link> 
            </div>

            <StudentTableHead>
              <span>
                이름
                <Sort />
              </span>
              <span>
                반<Sort />
              </span>
              <span>생년월일</span>
              <span>
                평가날짜
                <Sort />
              </span>
              <span>성별</span>
              <div style={{ width: 30 }}></div>
            </StudentTableHead>
            {studentList !== null && (
              <Table isMobile={isMobile} studentList={studentList} />
            )}
          </StudentListContainer>
          <MoreButton>더보기</MoreButton>
        </div>
      )}
    </>
  );
};

export default StudentList;
