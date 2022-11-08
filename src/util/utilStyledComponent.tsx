import styled from "styled-components";

// NavBar
const NavBarContainer = styled.div`
  margin: auto;
  width: 1200px;
  height: 110px;
  align-items: center;
  display: flex;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 50%;
    align-items: center;
    display: flex;
    justify-content: space-evenly;
  }
`;

const NavBarDivideLine = styled.div`
  width: 100%;
  border-bottom: 1px solid #3763ff;
`;
const DropDownContents = styled.div<{ toggle: boolean }>`
  display: ${(props) => (props.toggle ? "block" : "none")};
  position: absolute;
  background: #f5f5f5;
  min-width: 10%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  left: 5%;
  border-radius: 10px;
  z-index: 1;
`;
// 검색창
const SearchBar = styled.input`
  width: 700px;
  height: 54px;
  border-radius: 30px;
  background: #f5f5f5;
  border: silver;
  position: relative;
  @media screen and (max-width: 768px) {
    width: 60%;
    height: 100%;
    border-radius: 30px;
    background: #f5f5f5;
    border: silver;
  }
  &:focus {
    outline: none;
    border-color: #ced4da;
  }
  &::placeholder {
    color: #999999;
  }
`;
// 네비게이션 끝에있는 프로필 사진
const NavProfile = styled.div`
  margin: auto;
  width: 46px;
  height: 46px;
  border-radius: 30px;
  background: #d9d9d9;
`;
// 검색되는 학생 리스트
const SearchedStudentList=styled.p`
    cursor: pointer;
    &:hover{
        background: #afaaaa;;
    }
`
export {
  NavBarContainer,
  NavProfile,
  NavBarDivideLine,
  DropDownContents,
  SearchBar,
  SearchedStudentList
};
