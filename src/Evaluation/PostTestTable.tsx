import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import styled from "styled-components";
import { postTestResultType } from "../util/Type";

const resultArray: postTestResultType[] = [{ content: "", score: "" }];
let filterdArray: postTestResultType[] = [{ content: "", score: "" }];

const PostTestTable = ({
  tableData,
  postTestResult,
  setPostTestResult,
}: {
  tableData: any;
  postTestResult: postTestResultType[];
  setPostTestResult: any;
}) => {
  type postTestType = {
    content: string;
  };

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
  `;

  const TableBody = styled.div`
    display: flex;
    justify-content: space-between;
    height: 3rem;
    align-items: center;
    margin-top: 10px;

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
  // 라디오 버튼
  const Radio = ({ value, content }: { value: string; content: string }) => {
    return (
      <label>
        <input
          style={{ zoom: "2.0" }}
          type="radio"
          value={value}
          onChange={(e) => {
            setResult(e.target.checked, content, value);
          }}
          checked={duplication(content) ? true : false}
        />
      </label>
    );
  };
  // 라디오그룹
  const RadioGroup = ({ children }: { children: any }) => {
    return (
      <div
        style={{
          width: "142px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {children}
      </div>
    );
  };

  // 사후평가데이터를 저장하는 함수
  const setResult = (
    checked: boolean,
    checkedContent: string,
    score: string
  ) => {
    if (checked) {
      filterdArray = resultArray.concat({
        content: checkedContent,
        score: score,
      });
      setPostTestResult((state: postTestResultType[]) => {
        state.concat(filterdArray as any);
      });
    } else {
      filterdArray = resultArray.filter(({ content }) => {
        return content !== checkedContent;
      });
      setPostTestResult((state: postTestResultType[]) => {
        return filterdArray;
      });
    }
  };

  // 사후평가에 저장돼있는 객체(중복여부)의 value에 따라 true/false를 반환하는 함수
  const duplication = useCallback(
    (content: string) => {
      let temp = filterdArray.find((a) => {
        return a.content === content;
      });
      if (temp === undefined) {
        return false;
      } else return true;
    },
    [filterdArray]
  );

  return (
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
          <div>{content}</div>
          <RadioGroup>
            <Radio value="1" content={content} />
            <Radio value="2" content={content} />
            <Radio value="3" content={content} />
            <Radio value="C" content={content} />
          </RadioGroup>
        </TableBody>
      ))}
    </Table>
  );
};
export default PostTestTable;
