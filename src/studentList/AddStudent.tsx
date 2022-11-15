import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as EccLogo } from "../Resource/svg/EccLogo.svg";
import GlobalFont from "../Resource/font/fonts";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  AddStudentContainer,
  AddStudentInputAreaContainer,
  AddStudentInputArea,
  AddStudentButton,
  ValidateBirth,
} from "./studentListStyleComponent";
const EccText = styled.h3`
  font-family: "roboto";
  color: #3763ff;
  opacity: 0.4;
`;

// 파이어베이스 권한 초기화
// 파이어베이스를 활용한 회원인증(로그인)

const AddStudent = ({ isMobile }: { isMobile: boolean }) => {
  const navigate = useNavigate();
  // 생일 형식확인(경고문구)
  const [birthToggle, setBirthToggle] = useState<boolean>(false);
  // 생일형식 확인
  const [birthAccess, setBirthAccess] = useState<boolean>(false);
  const attrClass = useRef<any>(null);
  const birth = useRef<any>(null);
  const gender = useRef<any>(null);
  const name = useRef<any>(null);

  //   then이 안 먹혀서 쓰는 함수
  const postDataToDB = async () => {
    await axios.post("/addStudent", {
      attrClass: attrClass.current.value,
      birth: birth.current.value,
      gender: gender.current.value,
      name: name.current.value,
      recent: "",
      uid: teacherInfo.uid,
    });
  };
  const teacherInfo = useSelector((state: any) => {
    return state.teacherInfo;
  });

  return (
    <AddStudentContainer>
      <EccLogo style={{ margin: "auto" }} />
      <GlobalFont />
      <EccText>EXPANDED CORE CURRICULUM</EccText>
      <AddStudentInputAreaContainer>
        <AddStudentInputArea ref={attrClass} placeholder="반" />
        <AddStudentInputArea
          ref={birth}
          placeholder="생년월일 6자리 ex)001122"
          onChange={(e) => {
            if (e.target.value.length > 6) {
              setBirthToggle(true);
              setBirthAccess(false);
            } else {
              setBirthToggle(false);
              setBirthAccess(true);
            }
          }}
        />
        <ValidateBirth birthToggle={birthToggle}>
          생년월일 형식에 맞춰 주세요 ㅠㅠ
        </ValidateBirth>
        <AddStudentInputArea ref={gender} placeholder="성별" />
        <AddStudentInputArea ref={name} placeholder="이름" />
      </AddStudentInputAreaContainer>
      <AddStudentButton
        onClick={() => {
          if (birthAccess) {
            postDataToDB();
            navigate('/studentList')
          } else {
            alert("생년월일 형식을 맞춰주세요");
          }
        }}
      >
        학생 추가하기
      </AddStudentButton>
    </AddStudentContainer>
  );
};

export default AddStudent;
