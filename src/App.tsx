import React from "react";
import logo from "./logo.svg";
import { Link, Route, Routes } from "react-router-dom";
import SignUp from "./Authentication/SignUp";
import SignIn from "./Authentication/SignIn";
import AddProfile from "./Authentication/AddProfile";
import CompleteSignUp from "./Authentication/CompleteSignUp";
import FindUserEmail from "./Authentication/FindUserEmail";
import { initializeApp } from "firebase/app";
import FindUserPass from "./Authentication/FindUserPass";
import "./App.css";
import StudentList from "./studentList/StudentList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<></>} />
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
      </Routes>
    </div>
  );
}
export default App;
