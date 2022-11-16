import { useEffect, useRef, useState, useMemo } from "react";
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
  const target = useRef<any>(null);
  const [isVisible, setIsVisible] = useState(false);
  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
  }, []);
  const callBackFunction = (entries: any) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };
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

    const observer = new IntersectionObserver(callBackFunction, options);
    const currentTarget = target.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [target, options]);
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "end",
              }}
            >
              <h1
                style={{
                  textAlign: "initial",
                  marginBottom: -10,
                  marginTop: 113,
                }}
              >
                학생리스트
              </h1>
              <Link to={`/addStudent/${teacherInfo.uid}`}>
                <AddStudentBtn>학생추가</AddStudentBtn>
              </Link>
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
          <div ref={target}>내가 보이는가</div>

          <MoreButton>더보기</MoreButton>
        </div>
      )}
    </>
  );
};

export default StudentList;
