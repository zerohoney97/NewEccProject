import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as GotoInfo } from "../Resource/svg/rightArrow.svg";

const EccEvaluationTable = (props: any) => {
  type studentEccInfo = {
    bigCategory: string;
    smallCategory: string;
    evaluationDate: string;
  };
  const [data, setData] = useState<studentEccInfo[]>([
    {
      bigCategory: "보조공학",
      smallCategory: "책마루",
      evaluationDate: "2022-10-20",
    },
    {
      bigCategory: "점자",
      smallCategory: "기초점자",
      evaluationDate: "2022-03-02",
    },
  ]);

  const StudentTable = styled.table`
    width: 100%;
    height: 500px;
    margin: auto;
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
      {data.map(({ bigCategory, smallCategory, evaluationDate }, i) => (
        <>
          <TableBody>
            <div>{bigCategory}</div>
            <div>{smallCategory}</div>
            <div>{evaluationDate}</div>
          </TableBody>
          <DivideLine />
        </>
      ))}

      {props.children}
    </StudentTable>
  );
};

export default EccEvaluationTable;
