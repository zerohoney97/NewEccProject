import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { useMediaQuery } from "react-responsive";
import { Link, Route, Routes } from "react-router-dom";
import SignUp from "./Authentication/SignUp";
import SignIn from "./Authentication/SignIn";
import AddProfile from "./Authentication/AddProfile";
import CompleteSignUp from "./Authentication/CompleteSignUp";
import FindUserEmail from "./Authentication/FindUserEmail";
import FindUserPass from "./Authentication/FindUserPass";
import StudentList from "./studentList/StudentList";
import StudentInfo from "./studentList/StudentInfo";
import PreTest from "./Evaluation/PreTest";
import PreTestResult from "./result/PreTestResult";
import PostTestResult from "./result/PostTestResult";
import CompareResult from "./result/CompareResult";
import "./App.css";
import PostTest from "./Evaluation/PostTest";
import NavBar from "./util/NavBar";
import AddStudent from "./studentList/AddStudent";
import axios from "axios";
import { useSelector } from "react-redux";
import { studentList } from "./util/Type";
import {serverUrl} from './util/globalVariants'

function App() {
  const [studentList, setStudentList] = useState<studentList[]>([]);
  const teacherUid = useSelector((state: any) => {
    return state.teacherInfo.uid;
  });
  useEffect(() => {
    axios.get(`${serverUrl}/getStudent`).then((res) => {
      let tempArray = res.data.filter((a: any) => {
        return a.uid === teacherUid;
      });
      setStudentList(tempArray);
    });
  }, []);

  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  return (
    <div className="App">
      <NavBar studentList={studentList} isMobile={isMobile} />

      <Routes>
        <Route path="/signIn" element={<SignIn isMobile={isMobile}></SignIn>} />
        <Route path="/signUp" element={<SignUp isMobile={isMobile}></SignUp>} />
        <Route
          path="/addProfile"
          element={<AddProfile isMobile={isMobile}></AddProfile>}
        />
        <Route
          path="/completeSignUp"
          element={<CompleteSignUp isMobile={isMobile}></CompleteSignUp>}
        />
        <Route
          path="/findEmail"
          element={<FindUserEmail isMobile={isMobile}></FindUserEmail>}
        />
        <Route
          path="/findPass"
          element={<FindUserPass isMobile={isMobile}></FindUserPass>}
        />
        <Route
          path="/"
          element={<StudentList isMobile={isMobile}></StudentList>}
        />
        <Route
          path="/addStudent/:uid"
          element={<AddStudent isMobile={isMobile}></AddStudent>}
        />
        <Route
          path="/studentInfo/:uid"
          element={<StudentInfo isMobile={isMobile}></StudentInfo>}
        />
        <Route
          path="/preTest"
          element={<PreTest isMobile={isMobile}></PreTest>}
        />
        <Route
          path="/postTest"
          element={<PostTest isMobile={isMobile}></PostTest>}
        />
        <Route
          path="/preTestResult/:uid"
          element={<PreTestResult isMobile={isMobile}></PreTestResult>}
        />
        <Route
          path="/postTestResult/:uid"
          element={<PostTestResult isMobile={isMobile}></PostTestResult>}
        />
        <Route
        path="/preTestResultCompare/:uid"
        element={<CompareResult isMobile={isMobile}></CompareResult>}/>
      </Routes>
    </div>
  );
}
export default App;
