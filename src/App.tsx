import React, { useEffect } from "react";
import logo from "./logo.svg";
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
import "./App.css";
import PostTest from "./Evaluation/PostTest";
import NavBar from "./util/NavBar";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<NavBar></NavBar>} />
        <Route path="/signIn" element={<SignIn></SignIn>} />
        <Route path="/signUp" element={<SignUp></SignUp>} />
        <Route path="/addProfile" element={<AddProfile></AddProfile>} />
        <Route
          path="/completeSignUp"
          element={<CompleteSignUp></CompleteSignUp>}
        />
        <Route path="/findEmail" element={<FindUserEmail></FindUserEmail>} />
        <Route path="/findPass" element={<FindUserPass></FindUserPass>} />
        <Route path="/studentList" element={<StudentList></StudentList>} />
        <Route path="/studentInfo" element={<StudentInfo></StudentInfo>} />
        <Route path="/preTest" element={<PreTest></PreTest>} />
        <Route path="/postTest" element={<PostTest></PostTest>} />
        <Route path="/preTestResult" element={<PreTestResult></PreTestResult>} />

      </Routes>
    </div>
  );
}
export default App;
