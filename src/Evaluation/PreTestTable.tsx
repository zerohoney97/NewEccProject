import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as GotoInfo } from "../Resource/svg/rightArrow.svg";

const PreTestTable = () => {
  type preTestType = {
    content: string;
    score: string;
  };
  const [data, setData] = useState<preTestType[]>([
    { content: "각 카테고리에 있는 항목", score: "C" },
    { content: "각 카테고리에 있는 항목", score: "C" },
    { content: "각 카테고리에 있는 항목", score: "C" },
    { content: "각 카테고리에 있는 항목", score: "C" },
    { content: "각 카테고리에 있는 항목", score: "C" },
  ]);

  const PretestTable = styled.table`
    width: 100%;
    height: 500px;
    background: #ffffff;
    margin: auto;
    margin-top: 10px;
  `;

  const TableBody = styled.div`
    display: flex;
    padding-left: 5px;
    padding-right: 10px;
    justify-content: space-between;
    height: 3rem;
    align-items: center;
    margin-top: 10px;
    & {
      border-bottom: 1px solid #e5e5e5;
    }
  `;

  return (
    <PretestTable>
      {data.map(({ content, score }, i) => (
        <TableBody>
          <div>{content}</div>
          <div>{score}</div>
        </TableBody>
      ))}
    </PretestTable>
  );
};

export default PreTestTable;
