import styled from "styled-components";
// StudentList

// studentList를 감싸는 컨테이너
const StudentListContainer = styled.div`
  background: #fafafa;
  margin: auto;
  width: 70%;
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

export { StudentListContainer, MoreButton };

// StudentList

// StudentInfo
// 학생정보페이지를 감싸는 컨테이너
const StudentInfoContainer = styled.div`
  margin: auto;
  width: 60%;
  height: 500px;
`;

// 학생 프로필
const StudentProfile = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin: auto;
  margin-top: 10%;
  background: #d9d9d9;
`;

const DivideLine = styled.div`
  border-bottom: 1px solid #e5e5e5;
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
  width: 80%;
  height: 100%;
  margin: auto;
  background: #ffffff;
`;
// 사전평가 버튼

const PreEccEvaButton = styled.button`
  width: 80%;
  height: 3rem;
  margin-top: 5px;
  background: #ffffff;
  border: 1px solid black;
  cursor: pointer;
`;
// 사후평가 버튼
const PostEccEvaButton = styled.button`
  width: 80%;
  height: 3rem;
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
  PostEccEvaButton
};

// StudentInfo
