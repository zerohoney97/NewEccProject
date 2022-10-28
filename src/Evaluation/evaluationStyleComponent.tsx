import styled from "styled-components";

// 드롭다운

const DropDownContentsBigCategory = styled.div<{ toggle: boolean }>`
  display: ${(props) => (props.toggle ? "block" : "none")};
  position: absolute;
  background: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
`;
const DropDownContentsSmallCategory = styled.div<{ toggle: boolean }>`
  display: ${(props) => (props.toggle ? "block" : "none")};
  position: absolute;
  background: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
`;
const DropDown = styled.div`
  width: 10%;
  padding: 15px;
  background: #e5e5e5;
  position: relative;
  cursor: pointer;
`;

export { DropDown, DropDownContentsBigCategory, DropDownContentsSmallCategory };

// PreTest

// 사전평가를 감싸는 컨테이너
const PreTestContainer = styled.div`
  width: 1200px;
  height: 500px;
  background: #fafafa;
  margin: auto;
  margin-top: 113px;
`;
const ButtonContainer = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
  height: 50px;
  width: 100%;
`;
const BackButton = styled.button`
  width: 30%;
  border: 1px solid white;
  background: #e5e5e5;
  color: #999999;
  cursor: pointer;
  border-radius: 10px;
`;

const NextButton = styled.button`
  width: 30%;
  border: 1px solid white;
  background: #3763ff;
  color: white;
  cursor: pointer;
  border-radius: 10px;
`;

export { PreTestContainer, ButtonContainer, BackButton, NextButton };
// PreTest

// PostTest

const PostTestContainer = styled.div`
  width: 80%;
  height: 500px;
  background: #fafafa;
  margin: auto;
  margin-top: 113px;
`;

export { PostTestContainer };
// PostTest
