import styled from "styled-components";
// StudentList

// studentList를 감싸는 컨테이너
const StudentListContainer = styled.div`
  background: #fafafa;
  margin: auto;
  width: 1200px;
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
  & span{
    margin-left: 20px;
    width: 16%;
  }
`;
export { StudentListContainer, MoreButton,StudentTableHead };

// StudentList

// StudentInfo
// 학생정보페이지를 감싸는 컨테이너
const StudentInfoContainer = styled.div`
  margin: auto;
  width: 1200px;
  height: 500px;
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
`;

const DivideLine = styled.div`
  width: 714px;
  margin: auto;
  border-bottom: 1px solid #e5e5e5;
`;
// eccList중간 컨테이너
const MiddleContainer = styled.div`
  margin: auto;
  width: 714px;
  height: 100%;
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
