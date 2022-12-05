import { useEffect, useRef, useState, useMemo, useCallback } from "react";
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
import { serverUrl } from "../util/globalVariants";
const StudentList = ({ isMobile }: { isMobile: boolean }) => {
  const [page, setPage] = useState<number>(1);
  const [studentList, setStudentList] = useState<studentList[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [target, setTarget] = useState<any>(null);
  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };
  }, []);
  const callBackFunction = async (entries: any, observer: any) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      console.log("as");
      observer.unobserve(entry.target);
      // 관찰됐을 때 연속 실행을 막기 위해 동기 promise를 사용
      await promiseTimeOut().then(() => {
        setPage(page + 1);
      });
      observer.observe(entry.target);
    }
  };

  const promiseTimeOut = () => {
    return new Promise<void>((resolve, reject) => {
      return setTimeout(resolve, 2000);
    });
  };
  const handleChange = (element: studentList[]) => {
    setStudentList([...element]);
  };

  // 학생이름 내림차순 정렬
  const sortStudentByName = () => {
    const tempArray = studentList.sort((a, b) => {
      return a.name > b.name ? -1 : a.name < b.name ? 1 : 0;
    });
    setStudentList([...tempArray]);
  };
  const teacherInfo = useSelector((state: any) => {
    return state.teacherInfo;
  });
  console.log(studentList);
  useEffect(() => {
    axios
      .get(`${serverUrl}/getStudentInformationByTeacher`, {
        params: { data: teacherInfo.uid },
      })
      .then((result) => {
        let temp: any[] = [];
        for (var i = 0; i < page * 5; i++) {
          // 강제로 5의 배수로 데이터를 넣다 보니까 빈 데이터는 undefined을 반환, 결국 map함수에서 undefined를 참조하므로
          // name,attrClass같은 비구조화 할당 인스턴스를 못 찾으므로 에러가 발생, if문으로 undefined일 경우 무시
          if (result.data[i] === undefined) {
            return;
          } else {
            temp.push(result.data[i]);
            handleChange(temp);
          }
        }
      });

    const observer = new IntersectionObserver(callBackFunction, options);

    if (target) observer.observe(target);

    return () => observer && observer.disconnect();
  }, [target, options, page]);

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
            <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  sortStudentByName();
                }}
              >
                이름
                <Sort />
              </span>
              <span>생년월일</span>
              <span>평가날짜</span>
              <div style={{ width: 30 }}></div>
            </StudentTableHead>
            {studentList !== null && (
              <Table
                isMobile={isMobile}
                studentList={studentList}
                page={page}
              />
            )}
          </StudentListContainer>
          {isLoading && <div>Loading...</div>}
          {!isLoading && <div ref={setTarget}></div>}
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
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  sortStudentByName();
                }}
              >
                이름
                <Sort />
              </span>
              <span>반</span>
              <span>생년월일</span>
              <span>평가날짜</span>
              <span>성별</span>
              <div style={{ width: 30 }}></div>
            </StudentTableHead>
            {studentList !== null && (
              <Table
                isMobile={isMobile}
                studentList={studentList}
                page={page}
              />
            )}
          </StudentListContainer>
          <div ref={setTarget}></div>
        </div>
      )}
    </>
  );
};

export default StudentList;
