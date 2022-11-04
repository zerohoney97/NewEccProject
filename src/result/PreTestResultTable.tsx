import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import styled from "styled-components";
import { ReactComponent as GotoInfo } from "../Resource/svg/rightArrow.svg";

const PreTestResultTable = ({
  tableData
}: {
  tableData: any;
}) => {
  // 체크박스 컴포넌트
  const Input = ({ content }: { content: string }) => {

    return (
      <input
        type={"checkbox"}
        style={{ zoom: "2.0" }}
       
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

export default PreTestResultTable;
