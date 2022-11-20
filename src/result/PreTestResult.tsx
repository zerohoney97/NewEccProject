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
import { useSearchParams } from "react-router-dom";
import { serverUrl } from "../util/globalVariants";

const PreTestResult = ({ isMobile }: { isMobile: boolean }) => {
  const selectedStudentInformaion = useSelector((state: any) => {
    return state.studentInformation;
  });
  const [tableData, setTableData] = useState<any>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const bigCategory = searchParams.get("bigCategory");
  const smallCategory = searchParams.get("smallCategory");
  const date = searchParams.get("date");
  const filterdResult = async (data: any) => {
    data.forEach((a: any) => {
      if (
        a.studentUid === selectedStudentInformaion.studentUid &&
        a.bigCategory === bigCategory &&
        a.smallCategory === smallCategory &&
        a.date === date
      ) {
        setTableData(a);
      }
    });
  };

  useEffect(() => {
    // 학생의 사전평가 정보를 불러옴
    axios
      .get(`${serverUrl}/getStudentPreEvaluationData`, {
        params: { studentData: selectedStudentInformaion },
      })
      .then((res) => {
        filterdResult(res.data);
        setIsLoading(false);
      });
  }, []);

  // 불러온 여러 object array형식의 결과 데이터를 querystring으로 불러온 대항목,소항목,평가날짜와 uid로 비교하여 table데이터에 저장

  return (
    <>
      {isMobile ? (
        <PreTestContainer>
          <div style={{  justifyContent: "space-between" }}>
            <h1>사전평가</h1>
            <div style={{ alignSelf: "end" }}>
              <span style={{ color: "#999999" }}>반,이름:</span>
              <span style={{ fontWeight: "bold" }}>
                {" "}
                {selectedStudentInformaion.attrClass},
                {selectedStudentInformaion.name}
              </span>
              <span style={{ color: "#999999" }}> 대문항:</span>
              <span style={{ fontWeight: "bold" }}> {bigCategory}</span>
              <span style={{ color: "#999999" }}> 소문항:</span>
              <span style={{ fontWeight: "bold" }}> {smallCategory}</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: 20,
            }}
          ></div>
          {!isLoading ? (
            <PreTestResultTable tableData={tableData}></PreTestResultTable>
          ) : (
            <h2>데이터를 불러오고 있습니다...</h2>
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
      ) : (
        <PreTestContainer>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>사전평가</h1>
            <div style={{ alignSelf: "end" }}>
              <span style={{ color: "#999999" }}>반,이름:</span>
              <span style={{ fontWeight: "bold" }}>
                {" "}
                {selectedStudentInformaion.attrClass},
                {selectedStudentInformaion.name}
              </span>
              <span style={{ color: "#999999" }}> 대문항:</span>
              <span style={{ fontWeight: "bold" }}> {bigCategory}</span>
              <span style={{ color: "#999999" }}> 소문항:</span>
              <span style={{ fontWeight: "bold" }}> {smallCategory}</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: 20,
            }}
          ></div>
          {!isLoading ? (
            <PreTestResultTable tableData={tableData}></PreTestResultTable>
          ) : (
            <h2>데이터를 불러오고 있습니다...</h2>
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
      )}
    </>
  );
};
export default PreTestResult;
