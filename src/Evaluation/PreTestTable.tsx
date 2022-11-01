import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import styled from "styled-components";
import { ReactComponent as GotoInfo } from "../Resource/svg/rightArrow.svg";

const PreTestTable = ({
  tableData,
  preTestResult,
  setPreTestResult,
}: {
  tableData: any;
  preTestResult: any;
  setPreTestResult: any;
}) => {
  // 체크박스 컴포넌트
  const Input = ({ content }: { content: string }) => {
    const setResult = (checked: boolean, content: string) => {
      if (checked) {
        setPreTestResult(
          preTestResult.concat(content)
        );
      } else{
        setPreTestResult(
        preTestResult.filter((a: string) => {
          return a !== content;
        })
      );
      }

     

      
    };
    return (
      <input
        type={"checkbox"}
        style={{ zoom: "2.0" }}
        onChange={(e) => {
          setResult(e.target.checked, content);
        }}
        checked={preTestResult.includes(content) ? true : false}
        className="checkBox"
      />
    );
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
    /* } */

    & {
      border-bottom: 1px solid #e5e5e5;
    }
  `;

  return (
    <Table>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span style={{ fontWeight: "bold" }}>문항</span>
        <span style={{ fontWeight: "bold", marginRight: "1rem" }}>C</span>
      </div>
      {tableData.map(({ content }: { content: any }, i: number) => (
        <TableBody >
          <div>{content}</div>
          <Input key={i} content={content} />
        </TableBody>
      ))}
    </Table>
  );
};

export default PreTestTable;
