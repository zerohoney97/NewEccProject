import styled, { keyframes } from "styled-components";
// StudentList

// studentList를 감싸는 컨테이너
const StudentListContainer = styled.div`
  background: #fafafa;
  margin: auto;
  width: 1200px;
  @media screen and (max-width: 768px) {
    width: 100%;
    background: #fafafa;
    margin: auto;
  }
`;

// 학생등록 버튼
const AddStudentBtn = styled.button`
  width: 200px;
  height: 50px;
  background: #e5e5e5;
  color: #999999;
  border: white;
  cursor: pointer;
  transition: all 0.5s;
  border-radius: 10px;
  &:hover {
    transition: all 0.5s;
    color: white;
    background: #3763ff;
  }
`;

// 학생 더보기 버튼
const MoreButton = styled.button`
  width: 200px;
  height: 50px;
  background: #e5e5e5;
  color: #999999;
  border: white;
  cursor: pointer;
`;
// 학생 테이블 헤드
const StudentTableHead = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;
  justify-content: space-around;
  & span {
    margin-left: 20px;
    width: 16%;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    width: 100%;
    background: #fafafa;
    margin: auto;
    margin-top: 30px;
    & span {
      margin-left: 20px;
      width: 30%;
    }
  }
`;

const changeColor = keyframes`
  0%{
opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;
export { StudentListContainer, MoreButton, StudentTableHead, AddStudentBtn };

// StudentList

// StudentInfo
// 학생정보페이지를 감싸는 컨테이너
const StudentInfoContainer = styled.div`
  margin: auto;
  width: 1200px;
  height: 500px;
  @media screen and (max-width: 768px) {
    margin: auto;
    width: 100%;
  }
`;

// 학생 프로필
const StudentProfile = styled.div`
  width: 176px;
  height: 176px;
  border-radius: 100px;
  margin: auto;
  margin-top: 150px;
  background: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100px;
    height: 100px;
    border-radius: 100px;
    margin: auto;
    margin-top: 50px;
    background: #d9d9d9;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const DivideLine = styled.div`
  width: 100%;
  margin: auto;
  border-bottom: 1px solid #e5e5e5;
`;
// eccList중간 컨테이너
const MiddleContainer = styled.div`
  margin: auto;
  width: 714px;
  height: 100%;
  @media screen and (max-width: 768px) {
    margin: auto;
    width: 100%;
  }
`;

// 드롭다운

const DropDownContents = styled.div<{ toggle: boolean }>`
  display: ${(props) => (props.toggle ? "blodk" : "none")};
  position: absolute;
  background: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
`;
const DropDown = styled.div`
  padding: 15px;
  background: #e5e5e5;
  position: relative;
  cursor: pointer;
`;

//ECC리스트
const EvaluationList = styled.div`
  width: 714px;
  height: 100%;
  margin: auto;
  padding-top: 30px;
  margin-top: 20px;
  background: #ffffff;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: auto;
    padding-top: 30px;
    margin-top: 20px;
    background: #ffffff;
  }
`;
// 사전평가 버튼

const PreEccEvaButton = styled.button`
  width: 80%;
  height: 3rem;
  margin-top: 5px;
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid black;
  cursor: pointer;
`;
// 사후평가 버튼
const PostEccEvaButton = styled.button`
  width: 80%;
  height: 3rem;
  border-radius: 10px;
  margin-top: 5px;
  background: #3763ff;
  color: white;
  border: white;
  cursor: pointer;
`;

export {
  StudentInfoContainer,
  StudentProfile,
  DivideLine,
  DropDown,
  DropDownContents,
  EvaluationList,
  PreEccEvaButton,
  PostEccEvaButton,
  MiddleContainer,
};

// StudentInfo

// AddStudnet
// 로그인 페이지 전체 컴포넌트를 감싸는 컨테이너
const AddStudentContainer = styled.div`
  margin: auto;
  margin-top: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 30%;
  @media screen and (max-width: 768px) {
    margin: auto;
    margin-top: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 80%;
  }
`;
// ecc 문구

const EccText = styled.h3`
  font-family: "roboto";
`;

// 로그인 정보를 기입하는 inputarea를 감싸는 컨테이너
const AddStudentInputAreaContainer = styled.div`
  margin-top: 50px;
`;
// inputarea스타일링
const AddStudentInputArea = styled.input`
  width: 80%;
  margin: 10px;
  padding: 10px;
  border: #e5e5e5 solid 1px;
  font-size: 15px;
`;

// 자동 로그인 컨테이너
const AutoLoginCotainer = styled.div`
  display: flex;
  width: 100%;
  height: 2rem;
  position: relative;
  padding: 30px;
`;
// 자동로그인
const AutoLogin = styled.input`
  height: 27.5px;
  width: 27.5px;
  cursor: pointer;
`;

// 로그인 버튼

const AddStudentButton = styled.button`
  width: 80%;
  height: 40px;
  background: #3763ff;
  border: white;
  border-radius: 5px;
  color: white;
  font-size: x-large;
  margin: auto;
  cursor: pointer;
`;

const ValidateBirth = styled.h4<{ birthToggle: boolean }>`
  display: ${(props) => {
    return props.birthToggle ? "block" : "none";
  }};
`;
export {
  AddStudentContainer,
  AddStudentInputAreaContainer,
  AddStudentInputArea,
  AddStudentButton,
  ValidateBirth
};
