import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import styled from "styled-components";
import { postTestScoreInResult } from "../util/Type";
// 결과임시저장
let resultArray: postTestScoreInResult[] = Array();
// filter함수를 위한 임시 똑같은 임시 변수
let newArray: any;

const PostTestTable = ({
  tableData,
  postTestResult,
  setPostTestResult,
  isMobile,
}: {
  tableData: any;
  postTestResult: postTestScoreInResult[];
  setPostTestResult: any;
  isMobile: boolean;
}) => {
  const Table = styled.table`
    width: 100%;
    height: 500px;
    background: #ffffff;
    margin: auto;
    margin-top: 30px;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 40px;
    border: 1px solid #e5e5e5;
    @media screen and (max-width: 768px) {
      width: 100%;
      background: #ffffff;
      margin: auto;
      margin-top: 30px;
      padding-left: 50px;
      padding-right: 50px;
      padding-top: 40px;
      border: 1px solid #e5e5e5;
    }
  `;

  const TableBody = styled.div`
    display: flex;
    justify-content: space-between;
    height: 3rem;
    align-items: center;
    margin-top: 10px;
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      height: 8rem;
      align-items: center;
      margin-top: 10px;
      & {
        border-bottom: 1px solid #e5e5e5;
      }
    }

    /* &:nth-child(1) {
          font-weight: bold;
          .checkBox {
            visibility: hidden;
          }
        }
     */
    & {
      border-bottom: 1px solid #e5e5e5;
    }
  `;

  useEffect(() => {
    setPostTestResult(resultArray);
  }, [resultArray]);

  const setResult = (content: string, score: string) => {
    if (resultArray.length === 0) {
      resultArray.push({ content: content, score: score });
    } else {
      if (
        resultArray.find((a) => {
          return a.content === content;
        })
      ) {
        newArray = resultArray.map((a) => {
          return a.content === content ? { ...a, score: score } : a;
        });
        resultArray = [...newArray];
      } else {
        resultArray.push({ content: content, score: score });
      }
    }
  };
  // 라디오 버튼
  const RadioButton = ({ value, onChange }: { value: any; onChange: any }) => {
    return (
      <label>
        <input
          type="radio"
          checked={value}
          onChange={onChange}
          style={{ zoom: "2.0" }}
        />
      </label>
    );
  };
  // 라디오그룹
  const RadioGroup = ({ content, i }: { content: any; i: number }) => {
    const [chekedData, setCheckedData] = React.useState("");

    const handleChange = (value: any, score: string) => {
      setResult(content, score);
      setCheckedData(value);
    };

    return (
      <>
        {isMobile ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                flexDirection: "column-reverse",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <RadioButton
                value={chekedData === `1`}
                onChange={() => {
                  handleChange(`1`, "1");
                }}
              />
              1
            </div>
            <div
              style={{
                display: "inline-flex",
                flexDirection: "column-reverse",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <RadioButton
                value={chekedData === `2`}
                onChange={() => {
                  handleChange(`2`, "2");
                }}
              />
              2
            </div>
            <div
              style={{
                display: "inline-flex",
                flexDirection: "column-reverse",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <RadioButton
                value={chekedData === `3`}
                onChange={() => {
                  handleChange(`3`, "3");
                }}
              />
              3
            </div>
            <div
              style={{
                display: "inline-flex",
                flexDirection: "column-reverse",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <RadioButton
                value={chekedData === `C`}
                onChange={() => {
                  handleChange(`C`, "C");
                }}
              />
              C
            </div>
          </div>
        ) : (
          <div
            style={{
              width: "142px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <RadioButton
              value={chekedData === `1`}
              onChange={() => {
                handleChange(`1`, "1");
              }}
            />
            <RadioButton
              value={chekedData === `2`}
              onChange={() => {
                handleChange(`2`, "2");
              }}
            />
            <RadioButton
              value={chekedData === `3`}
              onChange={() => {
                handleChange(`3`, "3");
              }}
            />
            <RadioButton
              value={chekedData === `C`}
              onChange={() => {
                handleChange(`C`, "C");
              }}
            />
          </div>
        )}
      </>
    );
  };

  return (
    <>
      {isMobile ? (
        <Table>
          <h2 style={{ fontWeight: "bold", margin: "auto" }}>문항</h2>
          {tableData.map(({ content }: { content: any }, i: number) => (
            <TableBody key={i}>
              <div
                style={{
                  fontFamily: "JuaRegular",
                  fontSize:'large'
                }}

              >
                {i}.{content}
              </div>

              <RadioGroup content={content} i={i}></RadioGroup>
            </TableBody>
          ))}
        </Table>
      ) : (
        <Table>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <span style={{ fontWeight: "bold" }}>문항</span>
            <div
              style={{
                width: "142px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontWeight: "bold" }}>1</span>
              <span style={{ fontWeight: "bold" }}>2</span>
              <span style={{ fontWeight: "bold" }}>3</span>
              <span style={{ fontWeight: "bold" }}>C</span>
            </div>
          </div>
          {tableData.map(({ content }: { content: any }, i: number) => (
            <TableBody key={i}>
              <div>
                {i}.{content}
              </div>
              <RadioGroup content={content} i={i}></RadioGroup>
            </TableBody>
          ))}
        </Table>
      )}
    </>
  );
};
export default PostTestTable;
