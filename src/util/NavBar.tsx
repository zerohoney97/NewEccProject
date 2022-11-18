import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useMediaQuery } from "react-responsive";
import {
  NavBarContainer,
  NavBarDivideLine,
  NavProfile,
  DropDownContents,
  SearchBar,
  SearchedStudentList,
  LogOut,
} from "./utilStyledComponent";
import { Link } from "react-router-dom";
import { ReactComponent as EccLogo } from "../Resource/svg/EccLogo.svg";
import { ReactComponent as Magnify } from "../Resource/svg/ magnifyingGlass.svg";
import { useCallback } from "react";
import { setStudentInformation } from "../redux/slice/studentReducer";
import { studentList } from "../util/Type";
const auth = getAuth();

const NavBar = ({
  isMobile,
  studentList,
}: {
  isMobile: boolean;
  studentList: studentList[];
}) => {
  let dispatch = useDispatch();
  let newAttrClass: string;
  let newBirth: string;
  let newRecent: string;
  let newGender: string;
  let new_id: string;

  // 검색된 학생을 담는 임시 리스트
  const [inputData, setInputData] = useState("");
  const dropDownContents = useRef<any>();
  const [toggle, setToggle] = useState<boolean>(false);
  const [isLogined, setIsLogined] = useState<boolean>(false);
  const teacherInfo = useSelector((state: any) => {
    return state.teacherInfo;
  });
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogined(true);
      }
    });
  });
  const setClickedStudent = (
    name: string,
    attrClass: string,
    birth: string,
    recent: string,
    gender: string,
    _id: string
  ) => {
    dispatch(
      setStudentInformation({
        name: name,
        attrClass: attrClass,
        birth: birth,
        recent: recent,
        gender: gender,
        uid: _id,
      })
    );
  };
  const handleChange = useCallback(
    (e: any) => {
      setInputData(e.target.value);
      setToggle(true);
    },
    [inputData]
  );

  return (
    <>
      {isMobile ? (
        <>
          <NavBarContainer>
            <Link to="/studentList">
              <EccLogo style={{ width: 76, height: 30.74 }} />
            </Link>
            <SearchBar
              placeholder="검색할 학생의 이름을 입력하세요"
              style={{ paddingLeft: 10 }}
              value={inputData}
              onChange={handleChange}
            />
            <DropDownContents ref={dropDownContents} toggle={toggle}>
              {/* 생검색 함수, 원래는 inputData를 비교해서 얻은 결과를 새로운 state에 넣어 view에 반환하려 했지만 
            제대로 화면에 나타나지 않아 이렇게 함 */}
              {studentList
                .filter((a) => {
                  return a.name.includes(inputData);
                })
                .map(({ name, attrClass, birth, recent, gender, _id }, i) => {
                  return (
                    <Link
                      to={`/studentInfo/${_id}`}
                      style={{ textDecoration: "none", color: "black" }}
                      onClick={() => {
                        setClickedStudent(
                          name,
                          attrClass,
                          birth,
                          recent,
                          gender,
                          _id
                        );
                        setToggle(false);
                        setInputData("");
                      }}
                    >
                      <SearchedStudentList>{name}</SearchedStudentList>
                    </Link>
                  );
                })}
            </DropDownContents>
            <LogOut
              onClick={() => {
                signOut(auth)
                  .then(() => {
                    window.location.href = "/signIn";
                  })
                  .catch((error) => {
                    // An error happened.
                  });
              }}
              style={{ display: `${isLogined ? "block" : "none"}` }}
            >
              로그아웃
            </LogOut>
          </NavBarContainer>
          <NavBarDivideLine />
        </>
      ) : (
        <>
          <NavBarContainer>
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
              <div style={{ position: "relative" }}>
                <SearchBar
                  placeholder="검색할 학생의 이름을 입력하세요"
                  style={{ paddingLeft: 40 }}
                  value={inputData}
                  onChange={handleChange}
                />
                <DropDownContents ref={dropDownContents} toggle={toggle}>
                  {/* 생검색 함수, 원래는 inputData를 비교해서 얻은 결과를 새로운 state에 넣어 view에 반환하려 했지만 
                  제대로 화면에 나타나지 않아 이렇게 함 */}
                  {studentList
                    .filter((a) => {
                      return a.name.includes(inputData);
                    })
                    .map(
                      ({ name, attrClass, birth, recent, gender, _id }, i) => {
                        return (
                          <Link
                            to={`/studentInfo/${_id}`}
                            style={{ textDecoration: "none", color: "black" }}
                            onClick={() => {
                              setClickedStudent(
                                name,
                                attrClass,
                                birth,
                                recent,
                                gender,
                                _id
                              );
                              setToggle(false);
                              setInputData("");
                            }}
                          >
                            <SearchedStudentList>{name}</SearchedStudentList>
                          </Link>
                        );
                      }
                    )}
                </DropDownContents>
              </div>
            </span>
            <span style={{ marginLeft: 60 }}>
              <span style={{ color: "#00CF15", fontSize: 18 }}>
                {teacherInfo.name}
              </span>
              <span style={{ fontSize: 18 }}>선생님! 환영합니다!</span>
            </span>
            <NavProfile />
            <LogOut
              onClick={() => {
                signOut(auth)
                  .then(() => {
                    window.location.href = "/signIn";
                  })
                  .catch((error) => {
                    // An error happened.
                  });
              }}
              style={{ display: `${isLogined ? "block" : "none"}` }}
            >
              로그아웃
            </LogOut>
          </NavBarContainer>
          <NavBarDivideLine />
        </>
      )}
    </>
  );
};

export default NavBar;
