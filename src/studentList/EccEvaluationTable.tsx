import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as GotoInfo } from "../Resource/svg/rightArrow.svg";

const EccEvaluationTable = (props: any) => {
  type studentEccInfo = {
    bigCategory: string;
    smallCategory: string;
    evaluationDate: string;
  };

  const StudentTable = styled.table`
    width: 100%;
    height: 500px;
    margin: auto;
    transition: 0.25s;
    cursor: pointer;
    & :hover {
      background: #e5e5e5;
      transition: 0.25s;
    }
  `;

  const TableBody = styled.div`
    background: white;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 3rem;
    align-items: center;
    margin-top: 10px;
    & div {
      width: 33%;
      margin: auto;
    }

    /* &:nth-child(1) {
      background: #fafafa;
      & .goto-info {
        display: none;
      }
      & div {
        position: relative;
        left: -1%;
      }
    } */
  `;
  const DivideLine = styled.div`
    border-bottom: 1px solid #e5e5e5;
    margin: auto;
    width: 80%;
  `;

  return (
    <StudentTable>
      {props.trigger === "사전평가"
        ? props.studentPreEvaluationData.map((a: any, i: number) => {
            return (
              <>
                <TableBody key={i}>
                  <div>{a.bigCategory}</div>
                  <div>{a.smallCategory}</div>
                  <div>{a.date}</div>
                </TableBody>
                <DivideLine />
              </>
            );
          })
        : props.studentPostEvaluationData.map((a: any, i: number) => {
            return (
              <>
                <TableBody key={i}>
                  <div>{a.bigCategory}</div>
                  <div>{a.smallCategory}</div>
                  <div>{a.date}</div>
                </TableBody>
                <DivideLine />
              </>
            );
          })}

      {props.children}
    </StudentTable>
  );
};

export default EccEvaluationTable;
