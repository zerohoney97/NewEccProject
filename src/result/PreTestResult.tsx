import { useCallback, useEffect, useRef, useState } from "react";
import NavBar from "../util/NavBar";
import {
  PreTestContainer,
  ButtonContainer,
  BackButton,
} from "../Evaluation/evaluationStyleComponent";
import { ReactComponent as DropDownSVG } from "../Resource/svg/dropDown.svg";
import { useDispatch, useSelector } from "react-redux";
import PreTestResultTable from "./PreTestResultTable";
import axios from "axios";

const PreTestResult = () => {
  const selectedStudentInformaion = useSelector((state: any) => {
    return state.studentInformation;
  });


  const [tableData, setTableData] = useState<any>(null);


  return (
    <>
      <NavBar />
      <PreTestContainer>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1>사전평가</h1>
          <div style={{ alignSelf: "end" }}>
            <span style={{ color: "#999999" }}>반,이름:</span>
            <span style={{ fontWeight: "bold" }}> 3A김현아</span>
            <span style={{ color: "#999999" }}> 대문항:</span>
            <span style={{ fontWeight: "bold" }}> 보조공학</span>
            <span style={{ color: "#999999" }}> 소문항:</span>
            <span style={{ fontWeight: "bold" }}> 책마루</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: 20,
          }}
        ></div>
        {tableData !== null && (
          <PreTestResultTable
            tableData={tableData}
          ></PreTestResultTable>
        )}

        <ButtonContainer>
          <BackButton
            onClick={() => {
              window.history.back();
            }}
          >
            이전으로
          </BackButton>
        </ButtonContainer>
      </PreTestContainer>
    </>
  );
};
export default PreTestResult;
