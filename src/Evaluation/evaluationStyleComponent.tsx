import styled from "styled-components";

// PreTest

// 사전평가를 감싸는 컨테이너
const PreTestContainer = styled.div`
  width: 80%;
  height: 500px;
  background: #fafafa;
  margin: auto;
`;
const ButtonContainer = styled.div`
  display: flex;
  margin-top: 10px;
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
`;

export { PostTestContainer };
// PostTest
